"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyProductSection = void 0;
const header_1 = require("./header");
exports.emptyProductSection = {
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
};
