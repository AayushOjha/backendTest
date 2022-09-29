"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./card");
const header_1 = require("./header");
const AvailableComponents = {
    //TODO: Instead of using IEditor interface, use [IBasicCard, ITabHeightlighter, ....] speciffically.
    page_data: [
        {
            id: null,
            section_type: header_1.ESectionTypes.question_and_answers,
            name: header_1.ESectionNames.question_and_answers,
            position: 0,
            heading: '',
            heading_type: '',
            heading_description: '',
            display_full_description: false,
            components: [{ position: 0, question: '', answer: '' }],
        },
        {
            id: null,
            section_type: header_1.ESectionTypes.review_section,
            name: header_1.ESectionNames.review_section,
            position: 0,
            heading: '',
            heading_type: '',
            heading_description: '',
            display_full_description: false,
            reviews: [
                {
                    position: 0,
                    customerName: '',
                    profilePicture: null,
                    rating: 0,
                    reviewText: '',
                    reviewImages: [],
                    productName: '',
                },
            ],
        },
        {
            id: null,
            section_type: header_1.ESectionTypes.product_section,
            name: header_1.ESectionNames.product_section,
            position: 0,
            heading: '',
            heading_type: '',
            heading_description: '',
            display_full_description: false,
            show_as_varient: false,
            products: [],
        },
        {
            id: null,
            section_type: header_1.ESectionTypes.quick_links,
            name: header_1.ESectionNames.quick_links,
            position: 0,
            heading: '',
            heading_type: '',
            heading_description: '',
            display_full_description: false,
            link_cards: [
                {
                    category_name: '',
                    position: 0,
                    links: [
                        {
                            position: 0,
                            action_name: '',
                            action_link: '',
                        },
                    ],
                },
            ],
        },
        {
            id: null,
            section_type: header_1.ESectionTypes.basic_card,
            name: header_1.ESectionNames.basic_card,
            position: 0,
            heading: '',
            heading_type: '',
            heading_description: '',
            display_full_description: false,
            cardType: card_1.CardTypes.twoColumn,
            cards: [
                {
                    id: null,
                    position: 0,
                    title: '',
                    sub_title: '',
                    content: '',
                    image: [],
                    action: { action_name: '', action_link: '' },
                },
            ],
        },
    ],
};
exports.default = AvailableComponents;
