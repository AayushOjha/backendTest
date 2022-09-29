"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyReviewComponent = void 0;
const header_1 = require("./header");
exports.emptyReviewComponent = {
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
};
