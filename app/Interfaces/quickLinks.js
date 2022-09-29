"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyQuickLinks = void 0;
const header_1 = require("./header");
exports.emptyQuickLinks = {
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
            position: 0,
            category_name: '',
            links: [
                {
                    position: 0,
                    action_name: '',
                    action_link: '',
                },
            ],
        },
    ],
};
