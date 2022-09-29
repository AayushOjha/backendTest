"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyQuestionAndAnswer = void 0;
const header_1 = require("./header");
exports.emptyQuestionAndAnswer = {
    id: null,
    section_type: header_1.ESectionTypes.question_and_answers,
    name: header_1.ESectionNames.question_and_answers,
    position: 0,
    heading: '',
    heading_type: '',
    heading_description: '',
    display_full_description: false,
    components: [{ position: 0, question: '', answer: '' }],
};
