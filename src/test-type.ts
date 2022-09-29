import { IEditor } from '../Interfaces/Editor';

let x: IEditor = {
  sections: [
    {
      id: null,
      section_type: 'basic_card',
      name: 'Basic Card',
      position: 0,
      heading: 'Here We have data',
      heading_description: '<p>Here We have data</p>',
      heading_type: '',
      display_full_description: true,
      cardType: 'TWO_COLUMN',
      cards: [
        {
          id: null,
          position: 0,
          title: 'Here We have data',
          image: [],
          action: {
            action_name: 'Here We have data',
            action_link: 'Here We have data',
          },
          sub_title: '',
          content: '<p>Here We have data</p>',
        },
        {
          id: null,
          position: 1,
          title: 'Here We have data',
          image: [],
          action: {
            action_name: 'Here We have data',
            action_link: 'Here We have data',
          },
          sub_title: '',
          content: '<p>Here We have data</p>',
        },
      ],
    },
    {
      id: null,
      section_type: 'question_and_answers',
      name: 'Question and Answer',
      position: 1,
      heading: 'Here We have data',
      heading_type: '',
      heading_description: '<p>Here We have data</p>',
      display_full_description: false,
      components: [
        {
          position: 0,
          question: 'Here We have data',
          answer: 'Here We have data',
        },
        {
          position: 1,
          question: 'Here We have data',
          answer: 'Here We have data',
        },
      ],
    },
    {
      id: null,
      section_type: 'quick_links',
      name: 'Quick Links',
      position: 2,
      heading: 'Here We have data',
      heading_type: '',
      heading_description: '<p>Here We have data</p>',
      display_full_description: false,
      link_cards: [
        {
          position: 0,
          category_name: 'Here We have data',
          links: [
            {
              position: 0,
              action_name: 'Here We have data',
              action_link: 'Here We have data',
            },
            {
              position: 1,
              action_name: 'Here We have data',
              action_link: 'Here We have data',
            },
          ],
        },
        {
          category_name: 'Here We have data',
          position: 1,
          links: [
            {
              position: 0,
              action_name: 'Here We have data',
              action_link: 'Here We have data',
            },
            {
              position: 1,
              action_name: '',
              action_link: '',
            },
          ],
        },
      ],
    },
  ],
};
