import { IEditor } from '../Interfaces/Editor';
import { ESectionNames, ESectionTypes } from '../Interfaces/header';
import { CardTypes } from '../Interfaces/card';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000/';
const CLIENT_ID = 1;
const websiteId = 1;
const pageId = 17;

let x = [
  {
    id: null,
    section_type: 'question_and_answers',
    name: 'QuestionAndAnswer',
    position: 0,
    heading: 'qa',
    heading_type: '',
    heading_description: '',
    display_full_description: false,
    components: [
      {
        position: 0,
        question: 'kitne kitne card',
        answer: 'qa me ek, or BC me 2',
      },
    ],
  },
  {
    id: null,
    section_type: 'basic_card',
    name: 'BasicCard',
    position: 1,
    heading: 'bc',
    heading_description: '',
    heading_type: '',
    display_full_description: false,
    cardType: 'TWO_COLUMN',
    cards: [
      {
        id: null,
        position: 0,
        title: 'ab',
        image: [],
        action: {
          action_name: 'us',
          action_link: 'ne',
        },
        sub_title: '',
        content: '<p>uper</p>',
      },
      {
        id: null,
        position: 1,
        title: 'bola',
        image: [],
        action: {
          action_name: 'krna',
          action_link: 'padegA',
        },
        sub_title: '',
        content: '<p>h to</p>',
      },
    ],
  },
];

let cx: IEditor = {
  page_data: [
    {
      id: null,
      section_type: 'basic_card',
      name: 'basic_card',
      position: 0,
      heading: 'aaa',
      heading_description: '',
      heading_type: '',
      display_full_description: false,
      cardType: CardTypes.onlyText,
      cards: [
        {
          id: null,
          position: 0,
          title: '',
          image: [],
          action: {
            action_name: '',
            action_link: '',
          },
          sub_title: '',
          content: '',
        },
      ],
    },
    {
      id: null,
      section_type: 'question_and_answers',
      name: 'question_and_answers',
      position: 0,
      heading: 'qa',
      heading_type: '',
      heading_description: '',
      display_full_description: false,
      components: [
        {
          position: 0,
          question: 'kitne kitne card',
          answer: 'qa me ek, or BC me 2',
        },
      ],
    },
  ],
};

// POST API TEST DATA.

const getRequest = () => {
  console.log('doing GET request to backend');

  axios
    .get(
      `http://localhost:3000/admin/api/websites/${websiteId}/pages/${pageId}?client_id=1`,
      {
        headers: {
          'Access-Token':
            'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NjQ3OTc0NTJ9.hz0PNfrLAR1Mfk04iL-wQ7-m1y-SmS2lPih7MfIVNE0',
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      console.log(`\nSUCCESS\ncheck if the produced data is of type IEditor`);
      console.log(JSON.stringify(response.data.page_data));
    })
    .catch((error) => {
      console.log(error.message);
      console.log('\nError\n');
    });
};

getRequest();
