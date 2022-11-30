/* eslint-disable no-unused-vars */
require('dotenv').config()
const request = require('supertest')
const axios = require('axios')
const express = require('express')
const apiRouter = require('../../api')

const ciceroResponse = {
  response: {
    errors: [],
    messages: [],
    results: {
      candidates: [
        {
          count: {
            from: 0,
            to: 43,
            total: 44
          },
          officials: [
            {
              id: 349580,
              sk: 343935,
              valid_from: '2021-01-22 00:00:00',
              valid_to: '2025-01-20 00:00:00',
              last_update_date: '2021-09-17 16:00:27.473292',
              salutation: '',
              first_name: 'Lloyd',
              middle_initial: 'J.',
              last_name: 'Austin',
              nickname: '',
              preferred_name: '',
              name_suffix: 'III',
              office: {
                id: 349580,
                sk: 343935,
                valid_from: '2021-01-22 00:00:00',
                valid_to: '2025-01-20 00:00:00',
                last_update_date: '2021-09-17 16:00:27.473292',
                district: {
                  id: 19,
                  sk: 19,
                  valid_from: '0001-01-01 04:56:02',
                  valid_to: null,
                  last_update_date: '2012-03-18 07:46:32',
                  district_type: 'NATIONAL_EXEC',
                  subtype: 'NATION',
                  country: 'US',
                  state: '',
                  city: '',
                  district_id: 'UNITED STATES',
                  label: 'United States',
                  num_officials: 2,
                  ocd_id: 'ocd-division/country:us',
                  data: {}
                },
                representing_city: '',
                representing_state: '',
                representing_country: {
                  status: 'UN Member State',
                  name_short: 'United States',
                  gmi_3: 'USA',
                  valid_from: '0001-01-01 00:00:00',
                  name_short_iso: 'United States',
                  name_short_local: 'United States',
                  valid_to: null,
                  id: 270,
                  sk: 247,
                  name_short_un: 'United States of America',
                  version: 1,
                  fips: 'US',
                  last_update_date: '2012-10-10 17:29:57.613222',
                  iso_3: 'USA',
                  iso_2: 'US',
                  iso_3_numeric: 840,
                  name_long_local: 'United States of America',
                  name_long: 'United States of America'
                },
                notes: '',
                title: 'Secretary of Defense',
                chamber: {
                  legislature_update_date: null,
                  official_count: 1,
                  id: 7703,
                  term_length: 'Serves at the pleasure of the President',
                  term_limit: 'No term limits.',
                  inauguration_rules:
                    'The Secretary takes office immediately upon confirmation by the Senate.',
                  name_native_language: '',
                  contact_phone: '',
                  name_formal: 'United States Secretary of Defense',
                  election_frequency: '',
                  government: {
                    name: 'United States of America',
                    type: 'NATIONAL',
                    city: '',
                    state: '',
                    country: {
                      status: 'UN Member State',
                      name_short: 'United States',
                      gmi_3: 'USA',
                      valid_from: '0001-01-01 00:00:00',
                      name_short_iso: 'United States',
                      name_short_local: 'United States',
                      valid_to: null,
                      id: 270,
                      sk: 247,
                      name_short_un: 'United States of America',
                      version: 1,
                      fips: 'US',
                      last_update_date: '2012-10-10 17:29:57.613222',
                      iso_3: 'USA',
                      iso_2: 'US',
                      iso_3_numeric: 840,
                      name_long_local: 'United States of America',
                      name_long: 'United States of America'
                    },
                    notes: ''
                  },
                  redistricting_rules: '',
                  vacancy_rules:
                    'Vacancies are filled via appointment by the President pending confirmation by the Senate.',
                  is_chamber_complete: true,
                  contact_email: '',
                  last_update_date: '2021-07-20 15:43:37.994626',
                  remarks:
                    'The Secretary serves at the pleasure of the President and may be removed from office at any time without approval from the Senate.',
                  name: 'Secretary of Defense',
                  url: 'https://www.defense.gov/',
                  type: 'EXEC',
                  notes: '',
                  has_geographic_representation: false,
                  is_appointed: true,
                  election_rules:
                    'Appointees are nominated by the President and confirmed by the Senate via simple majority at a confirmation hearing. If the Senate is not in session, the President may directly appoint an acting Secretary who serves pending confirmation by the Senate.'
                },
                election_rules: ''
              },
              initial_term_start_date: null,
              current_term_start_date: '2021-01-22 00:00:00',
              term_end_date: '2025-01-20 00:00:00',
              addresses: [
                {
                  address_1: 'U.S. Department of Defense',
                  address_2: '1000 Defense Pentagon',
                  address_3: '',
                  city: 'Washington',
                  county: '',
                  state: 'DC',
                  postal_code: '20301-1000',
                  phone_1: '',
                  fax_1: '',
                  phone_2: '',
                  fax_2: ''
                }
              ],
              email_addresses: [],
              web_form_url: '',
              urls: [
                'https://www.defense.gov/our-story/meet-the-team/secretary-of-defense/'
              ],
              photo_origin_url:
                'https://media.defense.gov/2021/Jan/29/2002592436/825/780/0/210123-A-CN110-0001.JPG',
              photo_cropping: null,
              notes: [
                'Lloyd James Austin III was sworn in as the 28th Secretary of Defense on January 22, 2021. Mr. Austin is the principal assistant to the President in all matters relating to the Department of Defense and serves on the National Security Council.\\n\\nMr. Austin was born in Mobile, Alabama, and raised in Thomasville, Georgia. He graduated from the United States Military Academy with a Bachelor of Science degree and a commission in the Infantry. He holds a Master of Arts degree in counselor education from Auburn University, and a Master of Business Management from Webster University. He is a graduate of the Infantry Officer Basic and Advanced courses, the Army Command and General Staff College, and the Army War College.\\n\\nHis 41-year career in the Army included command at the corps, division, battalion, and brigade levels. Mr. Austin was awarded the Silver Star for his leadership of the Army’s 3rd Infantry Division during the invasion of Iraq in 2003.  Seven years later, he would assume the duties of Commanding General of United States Forces – Iraq, overseeing all combat operations in the country. \\n\\nAfter a tour as the Army’s Vice Chief of Staff, Mr. Austin concluded his uniformed service as the Commander of U.S. Central Command, responsible for all military operations in the Middle East and Afghanistan.  In this assignment, he led U.S. and coalition efforts to battle ISIS in Iraq and Syria.  He retired from the Army in April, 2016.\\n\\nSince his retirement from military service, Mr. Austin served on the Boards of Directors for Raytheon Technologies, Nucor, and Tenet Healthcare.',
                '1953-08-08'
              ],
              committees: [],
              party: '',
              identifiers: [
                {
                  official: 349580,
                  version: 1,
                  identifier_type: 'FACEBOOK',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579725,
                  valid_from: '2021-01-22 00:00:00',
                  last_update_date: '2021-09-17 16:00:27.473292',
                  id: 579725,
                  identifier_value:
                    'https://www.facebook.com/Lloyd-James-Austin-103842745190200/'
                },
                {
                  official: 349580,
                  version: 1,
                  identifier_type: 'FACEBOOK-OFFICIAL',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579721,
                  valid_from: '2021-01-22 00:00:00',
                  last_update_date: '2021-09-17 16:00:27.473292',
                  id: 579721,
                  identifier_value: 'https://www.facebook.com/DeptofDefense'
                },
                {
                  official: 349580,
                  version: 1,
                  identifier_type: 'FLICKR',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579722,
                  valid_from: '2021-01-22 00:00:00',
                  last_update_date: '2021-09-17 16:00:27.473292',
                  id: 579722,
                  identifier_value: 'secdef'
                },
                {
                  official: 349580,
                  version: 1,
                  identifier_type: 'INSTAGRAM',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579724,
                  valid_from: '2021-01-22 00:00:00',
                  last_update_date: '2021-09-17 16:00:27.473292',
                  id: 579724,
                  identifier_value: 'austin_lloy'
                },
                {
                  official: 349580,
                  version: 1,
                  identifier_type: 'TWITTER',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579720,
                  valid_from: '2021-01-22 00:00:00',
                  last_update_date: '2021-09-17 16:00:27.473292',
                  id: 579720,
                  identifier_value: 'SecDef'
                },
                {
                  official: 349580,
                  version: 1,
                  identifier_type: 'TWITTER',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579719,
                  valid_from: '2021-01-22 00:00:00',
                  last_update_date: '2021-09-17 16:00:27.473292',
                  id: 579719,
                  identifier_value: 'DeptofDefense'
                },
                {
                  official: 349580,
                  version: 1,
                  identifier_type: 'VOTESMART',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579723,
                  valid_from: '2021-01-22 00:00:00',
                  last_update_date: '2021-09-17 16:00:27.473292',
                  id: 579723,
                  identifier_value: '195717'
                }
              ],
              titles: []
            },
            {
              id: 344623,
              sk: 6641,
              valid_from: '2021-03-18 00:00:00',
              valid_to: '2025-01-20 00:00:00',
              last_update_date: '2021-07-21 19:30:37.072037',
              salutation: '',
              first_name: 'Xavier',
              middle_initial: '',
              last_name: 'Becerra',
              nickname: '',
              preferred_name: '',
              name_suffix: '',
              office: {
                id: 344623,
                sk: 6641,
                valid_from: '2021-03-18 00:00:00',
                valid_to: '2025-01-20 00:00:00',
                last_update_date: '2021-07-21 19:30:37.072037',
                district: {
                  id: 19,
                  sk: 19,
                  valid_from: '0001-01-01 04:56:02',
                  valid_to: null,
                  last_update_date: '2012-03-18 07:46:32',
                  district_type: 'NATIONAL_EXEC',
                  subtype: 'NATION',
                  country: 'US',
                  state: '',
                  city: '',
                  district_id: 'UNITED STATES',
                  label: 'United States',
                  num_officials: 2,
                  ocd_id: 'ocd-division/country:us',
                  data: {}
                },
                representing_city: '',
                representing_state: '',
                representing_country: {
                  status: 'UN Member State',
                  name_short: 'United States',
                  gmi_3: 'USA',
                  valid_from: '0001-01-01 00:00:00',
                  name_short_iso: 'United States',
                  name_short_local: 'United States',
                  valid_to: null,
                  id: 270,
                  sk: 247,
                  name_short_un: 'United States of America',
                  version: 1,
                  fips: 'US',
                  last_update_date: '2012-10-10 17:29:57.613222',
                  iso_3: 'USA',
                  iso_2: 'US',
                  iso_3_numeric: 840,
                  name_long_local: 'United States of America',
                  name_long: 'United States of America'
                },
                notes: '',
                title: 'Secretary of Health and Human Services',
                chamber: {
                  legislature_update_date: null,
                  official_count: 1,
                  id: 7704,
                  term_length: 'Serves at the pleasure of the President',
                  term_limit: 'No term limits.',
                  inauguration_rules:
                    'The Secretary takes office immediately upon confirmation by the Senate.',
                  name_native_language: '',
                  contact_phone: '',
                  name_formal:
                    'United States Secretary of Health and Human Services',
                  election_frequency: '',
                  government: {
                    name: 'United States of America',
                    type: 'NATIONAL',
                    city: '',
                    state: '',
                    country: {
                      status: 'UN Member State',
                      name_short: 'United States',
                      gmi_3: 'USA',
                      valid_from: '0001-01-01 00:00:00',
                      name_short_iso: 'United States',
                      name_short_local: 'United States',
                      valid_to: null,
                      id: 270,
                      sk: 247,
                      name_short_un: 'United States of America',
                      version: 1,
                      fips: 'US',
                      last_update_date: '2012-10-10 17:29:57.613222',
                      iso_3: 'USA',
                      iso_2: 'US',
                      iso_3_numeric: 840,
                      name_long_local: 'United States of America',
                      name_long: 'United States of America'
                    },
                    notes: ''
                  },
                  redistricting_rules: '',
                  vacancy_rules:
                    'Vacancies are filled via appointment by the President pending confirmation by the Senate.',
                  is_chamber_complete: true,
                  contact_email: '',
                  last_update_date: '2021-07-20 15:44:14.706232',
                  remarks: '',
                  name: 'Secretary of Health and Human Services',
                  url: 'https://www.hhs.gov/',
                  type: 'EXEC',
                  notes: '',
                  has_geographic_representation: false,
                  is_appointed: true,
                  election_rules:
                    'Appointees are nominated by the President and confirmed by the Senate via simple majority at a confirmation hearing. If the Senate is not in session, the President may directly appoint an acting Secretary who serves pending confirmation by the Senate.'
                },
                election_rules: ''
              },
              initial_term_start_date: '1993-01-03 05:00:00',
              current_term_start_date: '2021-03-18 00:00:00',
              term_end_date: '2025-01-20 00:00:00',
              addresses: [
                {
                  address_1: 'U.S. Department of Health and Human Services',
                  address_2: '200 Independence Avenue, SW',
                  address_3: '',
                  city: 'Washington',
                  county: '',
                  state: 'DC',
                  postal_code: '20201',
                  phone_1: '(877) 696-6775',
                  fax_1: '',
                  phone_2: '',
                  fax_2: ''
                }
              ],
              email_addresses: [],
              web_form_url: '',
              urls: [
                'https://www.hhs.gov/about/leadership/xavier-becerra.html'
              ],
              photo_origin_url:
                'https://www.hhs.gov/sites/default/files/styles/bio_280x280/public/secretary-xavier-becerra.jpg?h=a0d58e75&itok=dCzPbiYp',
              photo_cropping: null,
              notes: [
                "Xavier Becerra is the 25th Secretary of the Department of Health and Human Services and the first Latino to hold the office in the history of the United States. As Secretary, he will carry out President Biden's vision to build a healthy America, and his work will focus on ensuring that all Americans have health security and access to healthcare.\\n\\nSecretary Becerra served 12 terms in Congress as a member of the U.S. House of Representatives. During his tenure, he was the first Latino to serve as a member of the powerful Committee on Ways and Means, he served as Chairman of his party's caucus, and as the Ranking Member of the Ways and Means Subcommittee on Social Security and Ranking Member of the Subcommittee on Health.\\n\\nBorn in Sacramento Secretary Becerra is the son of working-class parents. He was the first in his family to receive a four-year degree, earning his Bachelor of Arts in Economics from Stanford University. He earned his Juris Doctorate from Stanford Law School. His mother was born in Jalisco, Mexico and immigrated to the United States after marrying his father, a day laborer turned construction worker. He is married to Dr. Carolina Reyes, and he is proud of his three daughters: Clarisa, Olivia and Natalia, and son-in-law Ivan.",
                '1958-01-26'
              ],
              committees: [],
              party: '',
              identifiers: [
                {
                  official: 344623,
                  version: 1,
                  identifier_type: 'TWITTER',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 565825,
                  valid_from: '2021-03-18 00:00:00',
                  last_update_date: '2021-07-21 19:30:37.072037',
                  id: 565825,
                  identifier_value: 'SecBecerra'
                },
                {
                  official: 344623,
                  version: 1,
                  identifier_type: 'TWITTER',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 565824,
                  valid_from: '2021-03-18 00:00:00',
                  last_update_date: '2021-07-21 19:30:37.072037',
                  id: 565824,
                  identifier_value: 'XavierBecerra'
                },
                {
                  official: 344623,
                  version: 1,
                  identifier_type: 'VOTESMART',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 565823,
                  valid_from: '2021-03-18 00:00:00',
                  last_update_date: '2021-07-21 19:30:37.072037',
                  id: 565823,
                  identifier_value: '26754'
                }
              ],
              titles: []
            },
            {
              id: 385612,
              sk: 1415,
              valid_from: '2021-01-20 00:00:00',
              valid_to: '2025-01-20 00:00:00',
              last_update_date: '2022-11-01 08:43:14.070479',
              salutation: 'Honorable',
              first_name: 'Joseph',
              middle_initial: 'Robinette',
              last_name: 'Biden',
              nickname: '',
              preferred_name: 'Joe',
              name_suffix: 'Jr.',
              office: {
                id: 385612,
                sk: 1415,
                valid_from: '2021-01-20 00:00:00',
                valid_to: '2025-01-20 00:00:00',
                last_update_date: '2022-11-01 08:43:14.070479',
                district: {
                  id: 19,
                  sk: 19,
                  valid_from: '0001-01-01 04:56:02',
                  valid_to: null,
                  last_update_date: '2012-03-18 07:46:32',
                  district_type: 'NATIONAL_EXEC',
                  subtype: 'NATION',
                  country: 'US',
                  state: '',
                  city: '',
                  district_id: 'UNITED STATES',
                  label: 'United States',
                  num_officials: 2,
                  ocd_id: 'ocd-division/country:us',
                  data: {}
                },
                representing_city: '',
                representing_state: '',
                representing_country: {
                  status: 'UN Member State',
                  name_short: 'United States',
                  gmi_3: 'USA',
                  valid_from: '0001-01-01 00:00:00',
                  name_short_iso: 'United States',
                  name_short_local: 'United States',
                  valid_to: null,
                  id: 270,
                  sk: 247,
                  name_short_un: 'United States of America',
                  version: 1,
                  fips: 'US',
                  last_update_date: '2012-10-10 17:29:57.613222',
                  iso_3: 'USA',
                  iso_2: 'US',
                  iso_3_numeric: 840,
                  name_long_local: 'United States of America',
                  name_long: 'United States of America'
                },
                notes: '',
                title: 'President',
                chamber: {
                  legislature_update_date: '0001-01-01 04:56:02',
                  official_count: 1,
                  id: 6436,
                  term_length: '4 years',
                  term_limit: '2 terms',
                  inauguration_rules: 'January 20 the year after the election',
                  name_native_language: '',
                  contact_phone: '',
                  name_formal: 'President of the United States',
                  election_frequency: '4 years',
                  government: {
                    name: 'United States of America',
                    type: 'NATIONAL',
                    city: '',
                    state: '',
                    country: {
                      status: 'UN Member State',
                      name_short: 'United States',
                      gmi_3: 'USA',
                      valid_from: '0001-01-01 00:00:00',
                      name_short_iso: 'United States',
                      name_short_local: 'United States',
                      valid_to: null,
                      id: 270,
                      sk: 247,
                      name_short_un: 'United States of America',
                      version: 1,
                      fips: 'US',
                      last_update_date: '2012-10-10 17:29:57.613222',
                      iso_3: 'USA',
                      iso_2: 'US',
                      iso_3_numeric: 840,
                      name_long_local: 'United States of America',
                      name_long: 'United States of America'
                    },
                    notes: ''
                  },
                  redistricting_rules: '',
                  vacancy_rules: '',
                  is_chamber_complete: true,
                  contact_email: '',
                  last_update_date: '2021-03-01 17:48:26.812352',
                  remarks: '',
                  name: 'President',
                  url: 'http://www.whitehouse.gov/',
                  type: 'EXEC',
                  notes: '',
                  has_geographic_representation: false,
                  is_appointed: false,
                  election_rules: ''
                },
                election_rules: ''
              },
              initial_term_start_date: '2009-01-20 05:00:00',
              current_term_start_date: '2021-01-20 00:00:00',
              term_end_date: '2025-01-20 00:00:00',
              addresses: [
                {
                  address_1: 'The White House',
                  address_2: '1600 Pennsylvania Avenue NW',
                  address_3: '',
                  city: 'Washington',
                  county: '',
                  state: 'DC',
                  postal_code: '20500',
                  phone_1: '(202) 456-1111',
                  fax_1: '',
                  phone_2: '(202) 456-1414',
                  fax_2: ''
                }
              ],
              email_addresses: [],
              web_form_url: 'https://www.whitehouse.gov/contact/',
              urls: [
                'https://www.whitehouse.gov/administration/president-biden/'
              ],
              photo_origin_url:
                'https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901.jpg',
              photo_cropping: null,
              notes: [
                'Joseph Robinette Biden, Jr. was born in Scranton, Pennsylvania, the first of four children of Catherine Eugenia Finnegan Biden and Joseph Robinette Biden, Sr. In 1953, the Biden family moved to Claymont, Delaware. President Biden graduated from the University of Delaware and Syracuse Law School and served on the New Castle County Council. \\n\\nJOE BIDEN’S FAMILY \\nAt age 29, President Biden became one of the youngest people ever elected to the United States Senate. Just weeks after his Senate election, tragedy struck the Biden family when his wife Neilia and daughter Naomi were killed, and sons Hunter and Beau were critically injured, in an auto accident.\\n\\nBiden was sworn into the U.S. Senate at his sons’ hospital bedsides and began commuting from Wilmington to Washington every day, first by car, and then by train, in order to be with his family. He would continue to do so throughout his time in the Senate. \\n\\nBiden married Jill Jacobs in 1977, and in 1980, their family was complete with the birth of Ashley Blazer Biden. A lifelong educator, Jill earned her doctorate in education and returned to teaching as an English professor at a community college in Virginia.\\n\\nBeau Biden, Attorney General of Delaware and Joe Biden’s eldest son, passed away in 2015 after battling brain cancer with the same integrity, courage, and strength he demonstrated every day of his life. Beau’s fight with cancer inspires the mission of President Biden’s life — ending cancer as we know it.\\n\\nA LEADER IN THE SENATE\\nAs a Senator from Delaware for 36 years, President Biden established himself as a leader in facing some of our nation’s most important domestic and international challenges. As Chairman or Ranking Member of the Senate Judiciary Committee for 16 years, Biden is widely recognized for his work writing and spearheading the Violence Against Women Act  — the landmark legislation that strengthens penalties for violence against women, creates unprecedented resources for survivors of assault, and changes the national dialogue on domestic and sexual assault.\\n\\nAs Chairman or Ranking Member of the Senate Foreign Relations Committee for 12 years, Biden played a pivotal role in shaping U.S. foreign policy. He was at the forefront of issues and legislation related to terrorism, weapons of mass destruction, post-Cold War Europe, the Middle East, Southwest Asia, and ending apartheid.\\n\\n“America is an idea. An idea that is stronger than any army, bigger than any ocean, more powerful than any dictator or tyrant. It gives hope to the most desperate people on earth, it guarantees that everyone is treated with dignity and gives hate no safe harbor. It instills in every person in this country the belief that no matter where you start in life, there’s nothing you can’t achieve if you work at it. That’s what we believe.”\\n\\nJOE BIDEN, APRIL 25, 2019\\nTHE 47TH VICE PRESIDENT OF THE UNITED STATES \\nAs Vice President, Biden continued his leadership on important issues facing the nation and represented our country abroad. Vice President Biden convened sessions of the President’s Cabinet, led interagency efforts, and worked with Congress in his fight to raise the living standards of middle-class Americans, reduce gun violence, address violence against women, and end cancer as we know it.\\n\\nBiden helped President Obama pass and then oversaw the implementation of the Recovery Act — the biggest economic recovery plan in the history of the nation and our biggest and strongest commitment to clean energy. The President’s plan prevented another Great Depression, created and saved millions of jobs, and led to 75 uninterrupted months of job growth by the end of the administration. And Biden did it all with less than 1% in waste, abuse, or fraud — the most efficient government program in our country’s history.\\n\\nPresident Obama and Vice President Biden also secured the passage of the Affordable Care Act, which reduced the number of uninsured Americans by 20 million by the time they left office and banned insurance companies from denying coverage due to pre-existing conditions.\\n\\nHe served as the point person for U.S. diplomacy throughout the Western Hemisphere, strengthened relationships with our allies both in Europe and the Asia-Pacific, and led the effort to bring 150,000 troops home from Iraq.\\n\\nIn a ceremony at the White House, President Obama awarded Biden the Presidential Medal of Freedom with Distinction — the nation’s highest civilian honor.\\n\\nA NEW CHAPTER\\nAfter leaving the White House, the Bidens continued their efforts to expand opportunity for every American with the creation of the Biden Foundation, the Biden Cancer Initiative, the Penn Biden Center for Diplomacy and Global Engagement, and the Biden Institute at the University of Delaware.\\n\\nOn April 25, 2019, Biden announced his candidacy for President of the United States. Biden’s candidacy was built from the beginning around 3 pillars: the battle for the soul of our nation, the need to rebuild our middle class — the backbone of our country, and a call for unity, to act as One America. It was a message that would only gain more resonance in 2020 as we confront a pandemic, an economic crisis, urgent calls for racial justice, and the existential threat of climate change.',
                '1942-11-20'
              ],
              committees: [],
              party: 'Democrat',
              identifiers: [
                {
                  official: 385612,
                  version: 1,
                  identifier_type: 'BIOGUIDE',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 697632,
                  valid_from: '2021-01-20 00:00:00',
                  last_update_date: '2022-11-01 08:43:14.070479',
                  id: 697632,
                  identifier_value: 'B000444'
                },
                {
                  official: 385612,
                  version: 1,
                  identifier_type: 'CRP',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 697633,
                  valid_from: '2021-01-20 00:00:00',
                  last_update_date: '2022-11-01 08:43:14.070479',
                  id: 697633,
                  identifier_value: 'N00001669'
                },
                {
                  official: 385612,
                  version: 1,
                  identifier_type: 'FACEBOOK-CAMPAIGN',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 697626,
                  valid_from: '2021-01-20 00:00:00',
                  last_update_date: '2022-11-01 08:43:14.070479',
                  id: 697626,
                  identifier_value: 'https://www.facebook.com/joebiden'
                },
                {
                  official: 385612,
                  version: 1,
                  identifier_type: 'FACEBOOK-OFFICIAL',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 697630,
                  valid_from: '2021-01-20 00:00:00',
                  last_update_date: '2022-11-01 08:43:14.070479',
                  id: 697630,
                  identifier_value: 'https://www.facebook.com/POTUS/'
                },
                {
                  official: 385612,
                  version: 1,
                  identifier_type: 'INSTAGRAM',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 697631,
                  valid_from: '2021-01-20 00:00:00',
                  last_update_date: '2022-11-01 08:43:14.070479',
                  id: 697631,
                  identifier_value: 'potus'
                },
                {
                  official: 385612,
                  version: 1,
                  identifier_type: 'INSTAGRAM-CAMPAIGN',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 697627,
                  valid_from: '2021-01-20 00:00:00',
                  last_update_date: '2022-11-01 08:43:14.070479',
                  id: 697627,
                  identifier_value: 'joebiden'
                },
                {
                  official: 385612,
                  version: 1,
                  identifier_type: 'TWITTER',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 697629,
                  valid_from: '2021-01-20 00:00:00',
                  last_update_date: '2022-11-01 08:43:14.070479',
                  id: 697629,
                  identifier_value: 'POTUS'
                },
                {
                  official: 385612,
                  version: 1,
                  identifier_type: 'YOUTUBE',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 697628,
                  valid_from: '2021-01-20 00:00:00',
                  last_update_date: '2022-11-01 08:43:14.070479',
                  id: 697628,
                  identifier_value: 'UCWNpXitY8eJ-ku6M-v25MKw'
                }
              ],
              titles: []
            },
            {
              id: 349581,
              sk: 343167,
              valid_from: '2021-01-26 00:00:00',
              valid_to: '2025-01-20 00:00:00',
              last_update_date: '2021-09-17 16:00:42.343112',
              salutation: '',
              first_name: 'Antony',
              middle_initial: 'J.',
              last_name: 'Blinken',
              nickname: '',
              preferred_name: 'Tony',
              name_suffix: '',
              office: {
                id: 349581,
                sk: 343167,
                valid_from: '2021-01-26 00:00:00',
                valid_to: '2025-01-20 00:00:00',
                last_update_date: '2021-09-17 16:00:42.343112',
                district: {
                  id: 19,
                  sk: 19,
                  valid_from: '0001-01-01 04:56:02',
                  valid_to: null,
                  last_update_date: '2012-03-18 07:46:32',
                  district_type: 'NATIONAL_EXEC',
                  subtype: 'NATION',
                  country: 'US',
                  state: '',
                  city: '',
                  district_id: 'UNITED STATES',
                  label: 'United States',
                  num_officials: 2,
                  ocd_id: 'ocd-division/country:us',
                  data: {}
                },
                representing_city: '',
                representing_state: '',
                representing_country: {
                  status: 'UN Member State',
                  name_short: 'United States',
                  gmi_3: 'USA',
                  valid_from: '0001-01-01 00:00:00',
                  name_short_iso: 'United States',
                  name_short_local: 'United States',
                  valid_to: null,
                  id: 270,
                  sk: 247,
                  name_short_un: 'United States of America',
                  version: 1,
                  fips: 'US',
                  last_update_date: '2012-10-10 17:29:57.613222',
                  iso_3: 'USA',
                  iso_2: 'US',
                  iso_3_numeric: 840,
                  name_long_local: 'United States of America',
                  name_long: 'United States of America'
                },
                notes: '',
                title: 'Secretary of State',
                chamber: {
                  legislature_update_date: null,
                  official_count: 1,
                  id: 7890,
                  term_length: 'Serves at the pleasure of the President',
                  term_limit: 'No term limits.',
                  inauguration_rules:
                    'The Secretary takes office immediately upon confirmation by the Senate.',
                  name_native_language: '',
                  contact_phone: '',
                  name_formal: 'United States Secretary of State',
                  election_frequency: '',
                  government: {
                    name: 'United States of America',
                    type: 'NATIONAL',
                    city: '',
                    state: '',
                    country: {
                      status: 'UN Member State',
                      name_short: 'United States',
                      gmi_3: 'USA',
                      valid_from: '0001-01-01 00:00:00',
                      name_short_iso: 'United States',
                      name_short_local: 'United States',
                      valid_to: null,
                      id: 270,
                      sk: 247,
                      name_short_un: 'United States of America',
                      version: 1,
                      fips: 'US',
                      last_update_date: '2012-10-10 17:29:57.613222',
                      iso_3: 'USA',
                      iso_2: 'US',
                      iso_3_numeric: 840,
                      name_long_local: 'United States of America',
                      name_long: 'United States of America'
                    },
                    notes: ''
                  },
                  redistricting_rules: '',
                  vacancy_rules:
                    'Vacancies are filled via appointment by the President pending confirmation by the Senate.',
                  is_chamber_complete: true,
                  contact_email: '',
                  last_update_date: '2021-07-21 17:19:49.975346',
                  remarks:
                    'The Secretary serves at the pleasure of the President and may be removed from office at any time without approval from the Senate.',
                  name: 'Secretary of State',
                  url: 'https://www.state.gov/secretary/',
                  type: 'EXEC',
                  notes: '',
                  has_geographic_representation: false,
                  is_appointed: true,
                  election_rules:
                    'Appointees are nominated by the President and confirmed by the Senate via simple majority at a confirmation hearing. If the Senate is not in session, the President may directly appoint an acting Secretary who serves pending confirmation by the Senate.'
                },
                election_rules: ''
              },
              initial_term_start_date: null,
              current_term_start_date: '2021-01-26 00:00:00',
              term_end_date: '2025-01-20 00:00:00',
              addresses: [
                {
                  address_1: 'Harry S. Truman Building',
                  address_2: '2201 C Street, NW',
                  address_3: '',
                  city: 'Washington',
                  county: '',
                  state: 'DC',
                  postal_code: '20520',
                  phone_1: '(202) 647-4000',
                  fax_1: '',
                  phone_2: '',
                  fax_2: ''
                }
              ],
              email_addresses: [],
              web_form_url:
                'https://register.state.gov/contactus/contactusform',
              urls: ['https://www.state.gov/secretary/'],
              photo_origin_url:
                'https://www.state.gov/wp-content/uploads/2021/01/50925278638_389ad88a3f_k-1125x1406.jpg',
              photo_cropping: null,
              notes: [
                'Antony J. Blinken is the 71st U.S. Secretary of State.\\n\\nHe was nominated by President Biden on November 23, 2020; confirmed by the U.S. Senate on January 26, 2021; and sworn in by Vice President Kamala Harris the following day.\\n\\nOver three decades and three presidential administrations, Mr. Blinken has helped shape U.S. foreign policy to ensure it protects U.S. interests and delivers results for the American people. He served as deputy secretary of state for President Barack Obama from 2015 to 2017, and before that, as President Obama’s principal deputy national security advisor. In that role, Mr. Blinken chaired the interagency deputies committee, the main forum for hammering out the administration’s foreign policy.\\n\\nDuring the first term of the Obama Administration, Mr. Blinken was national security advisor to then-Vice President Joe Biden. This was the continuation of a long professional relationship that stretched back to 2002, when Mr. Blinken began his six-year stint as Democratic staff director for the U.S. Senate Foreign Relations Committee. Then-Senator Biden was the chair of that committee from 2001 to 2003 and 2007 to 2009.\\n\\nDuring the Clinton Administration, Mr. Blinken served as a member of the National Security Council staff, including two years as the senior director for European affairs, the president’s principal advisor on the countries of Europe, the European Union, and NATO. He also spent four years as President Clinton’s chief foreign policy speechwriter, and he led the NSC’s strategic planning team.\\n\\nMr. Blinken’s public service began at the State Department. From 1993 to 1994, he was a special assistant in what was then called the Bureau of European and Canadian Affairs. Now he is proud to lead the department where he got his start in government nearly 30 years ago.\\n\\nOutside of government, Mr. Blinken has worked in the private sector, civil society, and journalism. He was a founder of WestExec Advisors, an international strategic consulting firm focused on geopolitics and national security. He was a senior fellow at the Center for Strategic and International Studies from 2001 and 2002. Before joining government, Mr. Blinken practiced law in New York and Paris. He was also a reporter for The New Republic magazine and is the author of Ally Versus Ally: America, Europe and the Siberian Pipeline Crisis (Praeger, 1987).\\n\\nMr. Blinken attended grade school and high school in Paris, where he received a French Baccalaureat degree with high honors. He is a graduate of Harvard College and Columbia Law School. He and his wife Evan Ryan have two children.',
                '1962-04-16'
              ],
              committees: [],
              party: 'Democrat',
              identifiers: [
                {
                  official: 349581,
                  version: 1,
                  identifier_type: 'FACEBOOK-OFFICIAL',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579726,
                  valid_from: '2021-01-26 00:00:00',
                  last_update_date: '2021-09-17 16:00:42.343112',
                  id: 579726,
                  identifier_value: 'https://www.facebook.com/statedept'
                },
                {
                  official: 349581,
                  version: 1,
                  identifier_type: 'FLICKR',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579728,
                  valid_from: '2021-01-26 00:00:00',
                  last_update_date: '2021-09-17 16:00:42.343112',
                  id: 579728,
                  identifier_value: 'statephotos'
                },
                {
                  official: 349581,
                  version: 1,
                  identifier_type: 'INSTAGRAM',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579732,
                  valid_from: '2021-01-26 00:00:00',
                  last_update_date: '2021-09-17 16:00:42.343112',
                  id: 579732,
                  identifier_value: 'statedept'
                },
                {
                  official: 349581,
                  version: 1,
                  identifier_type: 'INSTAGRAM',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579729,
                  valid_from: '2021-01-26 00:00:00',
                  last_update_date: '2021-09-17 16:00:42.343112',
                  id: 579729,
                  identifier_value: 'secblinken'
                },
                {
                  official: 349581,
                  version: 1,
                  identifier_type: 'TWITTER',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579727,
                  valid_from: '2021-01-26 00:00:00',
                  last_update_date: '2021-09-17 16:00:42.343112',
                  id: 579727,
                  identifier_value: 'SecBlinken'
                },
                {
                  official: 349581,
                  version: 1,
                  identifier_type: 'VOTESMART',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579731,
                  valid_from: '2021-01-26 00:00:00',
                  last_update_date: '2021-09-17 16:00:42.343112',
                  id: 579731,
                  identifier_value: '195720'
                },
                {
                  official: 349581,
                  version: 1,
                  identifier_type: 'YOUTUBE',
                  valid_to: '2025-01-20 00:00:00',
                  sk: 579730,
                  valid_from: '2021-01-26 00:00:00',
                  last_update_date: '2021-09-17 16:00:42.343112',
                  id: 579730,
                  identifier_value: 'statevideo'
                }
              ],
              titles: []
            }
          ],
          locator: 'World',
          score: 100,
          match_addr: '84054, North Salt Lake, Utah',
          x: -111.93450979999994,
          y: 40.85024600000003,
          wkid: 4326,
          locator_type: 'Postal',
          geoservice: 'EsriWGS',
          match_city: 'North Salt Lake',
          match_subregion: 'Davis County',
          match_region: 'UT',
          match_postal: '84054',
          match_country: 'US',
          match_streetaddr: ''
        }
      ]
    }
  }
}

const apiResponse = [
  {
    id: 343935,
    name: 'Lloyd Austin III',
    title: 'Secretary of Defense',
    address_line1: 'U.S. Department of Defense',
    address_line2: '1000 Defense Pentagon',
    address_city: 'Washington',
    address_state: 'DC',
    address_zip: '20301-1000',
    address_country: 'US',
    email: 'Not Made Public',
    contactPage:
      'https://www.defense.gov/our-story/meet-the-team/secretary-of-defense/',
    photoUrl:
      'https://media.defense.gov/2021/Jan/29/2002592436/825/780/0/210123-A-CN110-0001.JPG',
    socialMediaPages: [
      {
        type: 'facebook',
        url: 'https://facebook.com/DeptofDefense',
        icon: 'fa-brands fa-facebook-f',
        color: '#4267B2'
      },
      {
        type: 'instagram',
        url: 'https://instagram.com/austin_lloy',
        icon: 'fa-brands fa-instagram',
        color: '#C13584'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/SecDef',
        icon: 'fa-brands fa-twitter',
        color: '#1DA1F2'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/DeptofDefense',
        icon: 'fa-brands fa-twitter',
        color: '#1DA1F2'
      }
    ],
    photoCroppingCSS: 'center center'
  },
  {
    id: 6641,
    name: 'Xavier Becerra',
    title: 'Secretary of Health and Human Services',
    address_line1: 'U.S. Department of Health and Human Services',
    address_line2: '200 Independence Avenue, SW',
    address_city: 'Washington',
    address_state: 'DC',
    address_zip: '20201',
    address_country: 'US',
    email: 'Not Made Public',
    contactPage: 'https://www.hhs.gov/about/leadership/xavier-becerra.html',
    photoUrl:
      'https://www.hhs.gov/sites/default/files/styles/bio_280x280/public/secretary-xavier-becerra.jpg?h=a0d58e75&itok=dCzPbiYp',
    socialMediaPages: [
      {
        type: 'twitter',
        url: 'https://twitter.com/SecBecerra',
        icon: 'fa-brands fa-twitter',
        color: '#1DA1F2'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/XavierBecerra',
        icon: 'fa-brands fa-twitter',
        color: '#1DA1F2'
      }
    ],
    photoCroppingCSS: 'center center'
  },
  {
    id: 343167,
    name: 'Tony Blinken',
    title: 'Secretary of State',
    address_line1: 'Harry S. Truman Building',
    address_line2: '2201 C Street, NW',
    address_city: 'Washington',
    address_state: 'DC',
    address_zip: '20520',
    address_country: 'US',
    email: 'Not Made Public',
    contactPage: 'https://register.state.gov/contactus/contactusform',
    photoUrl:
      'https://www.state.gov/wp-content/uploads/2021/01/50925278638_389ad88a3f_k-1125x1406.jpg',
    socialMediaPages: [
      {
        type: 'facebook',
        url: 'https://facebook.com/statedept',
        icon: 'fa-brands fa-facebook-f',
        color: '#4267B2'
      },
      {
        type: 'instagram',
        url: 'https://instagram.com/statedept',
        icon: 'fa-brands fa-instagram',
        color: '#C13584'
      },
      {
        type: 'instagram',
        url: 'https://instagram.com/secblinken',
        icon: 'fa-brands fa-instagram',
        color: '#C13584'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/SecBlinken',
        icon: 'fa-brands fa-twitter',
        color: '#1DA1F2'
      },
      {
        type: 'youtube',
        url: 'https://youtube.com/statevideo',
        icon: 'fa-brands fa-youtube',
        color: '#FF0000'
      }
    ],
    photoCroppingCSS: 'center center'
  }
]

// Create a test application
/* Setting up the environment for the test. */

// Create a test application and get the application id and secret key for the test application from the test application page.
const app = express()
app.use('/api', apiRouter)
// const { CICERO_API_KEY } = process.env
// const CICERO_API_HOST = 'https://cicero.azavea.com/v3.1/official'
const zipCode = '84054'
afterEach(() => {
  jest.clearAllMocks()
})

// Mock the axios request to the Cicero API and return the mock data for the test.
afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)) // avoid jest open handle error
})

// Mock the axios request to the Cicero API and return the mock data for the test.
jest.mock('axios')

// Mock the axios request to the Cicero API and return the mock data for the test.
describe('GET /api/representatives/:zipCode', () => {
  //test that the api returns a 200 status code and a single representative object in the response
  it('should return a 200 status code and a single representative object in the response', async () => {
    const spy = jest.spyOn(axios, 'get')
    spy.mockImplementation(async (url, { params }) => {
      return {
        data: ciceroResponse
      }
    })
    // Make a request to the API
    const response = await request(app).get(`/api/representatives/${zipCode}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(apiResponse)
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})
