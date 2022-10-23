require('dotenv').config()

const express = require('express')
const axios = require('axios')
const qs = require('qs')

const router = express.Router()

const { CICERO_API_KEY } = process.env

const JURISDICTION_FILTER_MAP = {
  federal: 'country',
  state: 'administrativeArea1',
  county: 'administrativeArea2',
  municipality: 'locality'
}
const ALLOWED_JURISDICTION_FILTERS = Object.keys(JURISDICTION_FILTER_MAP)

// Endpoints

// Get
router.get('/:zipCode', async (req, res) => {
  const { zipCode } = req.params
  const { filter } = req.query

  if (!zipCode.match(/^\d{5}(-\d{4})?$/)) {
    res.status(400).send({
      error:
        'Invalid zip code format, valid examples are 84054-6013 or 84054. The zipcode used was ' +
        zipCode
    })
    return
  }

  if (filter != null && !ALLOWED_JURISDICTION_FILTERS.includes(filter)) {
    res.status(400).send({
      error: 'Invalid jurisdiction filter. The filter used was ' + filter
    })
    return
  }

  try {
    const {
      data: { response }
    } = await axios.get('https://cicero.azavea.com/v3.1/official', {
      params: {
        search_postal: zipCode,
        search_country: 'US',
        district_type: [
          'NATIONAL_UPPER',
          'NATIONAL_LOWER',
          'STATE_EXEC',
          'STATE_UPPER',
          'STATE_LOWER',
          'LOCAL_EXEC',
          'LOCAL'
        ],
        order: 'district_type', // https://cicero.azavea.com/docs/#order-by-district-type
        sort: 'asc',
        max: 200,
        format: 'json',
        key: CICERO_API_KEY
      },
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' })
    })

    const { errors, results } = response
    if (errors.length > 0) {
      throw new Error(errors.join(','))
    }
    if (
      !results ||
      !Array.isArray(results.candidates) ||
      results.candidates.length === 0
    ) {
      throw new Error('No matches found for the search criteria')
    }

    const officials = results.candidates[0].officials || []

    const representatives = officials
      .filter((rep) => {
        // skip President and VP
        return !(
          rep.office.district.ocd_id === 'ocd-division/country:us' &&
          /^(Vice )?President$/.test(rep.office.title)
        )
      })
      .map((rep) => {
        const mainAddr =
          (Array.isArray(rep.addresses) && rep.addresses[0]) || {}

        const repInfo = {
          id: rep.sk || rep.id || '',
          name: formatName(rep),
          title:
            rep.office.title ||
            rep.office.chamber.name_formal ||
            rep.office.chamber.name ||
            '',
          address_line1: mainAddr.address_1 || '',
          address_line2:
            mainAddr.address_2 +
              (mainAddr.address_3 ? ', ' + mainAddr.address_3 : '') || '',
          address_city: mainAddr.city || '',
          address_state: mainAddr.state || '',
          address_zip: mainAddr.postal_code || '',
          address_country: 'US',
          email:
            (Array.isArray(rep.email_addresses) && rep.email_addresses[0]) ||
            'Not Made Public',
          contactPage:
            rep.web_form_url || (Array.isArray(rep.urls) && rep.urls[0]) || '',
          photoUrl:
            rep.photo_origin_url ||
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          socialMediaPages: getOfficialSocialMediaPages(rep.identifiers),
          photoCroppingCSS: getPhotoCroppingValues(rep.photo_cropping)
        }
        console.log('rep name:' + repInfo.name)
        console.log('rep cropping:' + repInfo.photoCroppingCSS)
        return repInfo
      })

    res.send(representatives)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Whoops' })
  }
})

/*
 * Returns string with the following properties:
 *  - x-value: right or left. Indicates whether the photo should be cropped/positioned from the left or right side.
 *  - y-value: top or bottom. Indicates whether the photo should be cropped/psoitioned from the top or bottom side.
 *
 * Example: "top left"
 *
 * @param {string} photoCropping - The photo cropping object from the CICERO API
 * @returns {string} - The photo cropping CSS value
 *
 *
 */
function getPhotoCroppingValues(photo_cropping_object) {
  // If the photo cropping object is not defined, return default value
  if (!photo_cropping_object) {
    return 'center center'
  }

  // args
  console.log(photo_cropping_object)
  let x = photo_cropping_object.x
  let y = photo_cropping_object.y
  let oriH = photo_cropping_object.oriHeight
  let oriW = photo_cropping_object.origWidth

  // 1. calculate threeshold for the x space
  // we check if the coordinate starts on the left side of the image (the first half of the left side)
  let x_left_threeshold = oriW / 2 / 2
  // we check if the coordinate starts on the right side of the image (the first half of the right side) and we reduce a margin of 5% to be flexible
  let x_right_threeshold = oriW / 2 - (5 / 100) * (oriW / 2)
  console.log('x_left_threeshold: ' + x_left_threeshold)
  console.log('x_right_threeshold: ' + x_right_threeshold)
  // 2. calculate threeshold for the y space
  // we check if the coordinate starts on the top side of the image (the first half of the top side)
  let y_top_threeshold = oriH / 2 / 2
  // we check if the coordinate starts on the bottom side of the image (the first half of the bottom side) and we reduce a margin of 5% to be flexible
  let y_bottom_threeshold = oriH / 2 - (5 / 100) * (oriH / 2)
  console.log('y_top_threeshold: ' + y_top_threeshold)
  console.log('y_bottom_threeshold: ' + y_bottom_threeshold)

  // 3. determine the css values for the cropping
  let x_value =
    x <= x_left_threeshold
      ? 'left'
      : x >= x_right_threeshold
      ? 'right'
      : 'center'
  let y_value =
    y <= y_top_threeshold
      ? 'top'
      : y >= y_bottom_threeshold
      ? 'bottom'
      : 'center'

  // final css value with background position
  let css_value = x_value + ' ' + y_value

  return css_value
}

/*
 *  Function used to extract social media pages and format them as JSON objects by using an array from another JSON object.
 *  @param  {array} identifiers - array of identifiers from the JSON object.
 *  @return {array} socialMediaPages - array of social media pages.
 */

function getOfficialSocialMediaPages(identifiers) {
  var social_media_pages = []

  // loop through all the identifiers
  for (var i = 0; i < identifiers.length; i++) {
    // social media item with data
    var identifier = identifiers[i]

    // switch on the identifier type and value to get the social media page and the corresponding icon
    switch (identifier.identifier_type) {
      case 'TWITTER':
        social_media_pages.push({
          type: 'twitter',
          url: 'https://twitter.com/' + identifier.identifier_value,
          icon: 'fa-brands fa-twitter',
          color: '#1DA1F2' // offiial twitter color
        })
        break

      case 'FACEBOOK-OFFICIAL':
        var new_identifier_value = identifier.identifier_value.replace(
          /^(?:https?:\/\/(?:www\.)?facebook\.com\/)?(.+)\/?$/,
          '$1'
        )

        social_media_pages.push({
          type: 'facebook',
          url: 'https://facebook.com/' + new_identifier_value,
          icon: 'fa-brands fa-facebook-f',
          color: '#4267B2' // official facebook color
        })
        break

      case 'YOUTUBE':
        social_media_pages.push({
          type: 'youtube',
          url: 'https://youtube.com/' + identifier.identifier_value,
          icon: 'fa-brands fa-youtube',
          color: '#FF0000' // official youtube color
        })
        break

      case 'INSTAGRAM':
        social_media_pages.push({
          type: 'instagram',
          url: 'https://instagram.com/' + identifier.identifier_value,
          icon: 'fa-brands fa-instagram',
          color: '#C13584' // one of the official instagram colors
        })
        break
    }
  }

  return social_media_pages
}

function formatName(rep) {
  const nameParts = []

  // Only include salutations that are not "The Honorable", e.g. "Dr."
  if (rep.salutation && !/^(?:The )?Honorable$/.test(rep.salutation)) {
    nameParts.push(rep.salutation)
  }

  if (rep.preferred_name) {
    nameParts.push(rep.preferred_name)
  } else if (rep.first_name) {
    nameParts.push(rep.first_name)
  }

  // Ignore `middle_initial` (which is often a full name, for the record, NOT an initial)
  // Ignore `nickname`

  if (rep.last_name) {
    nameParts.push(rep.last_name)
  }

  if (rep.name_suffix) {
    nameParts.push(rep.name_suffix)
  }

  return nameParts.join(' ')
}

module.exports = router
