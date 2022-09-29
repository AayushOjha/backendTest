"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyCard = exports.emptyCardSection = exports.CardTypes = void 0;
const header_1 = require("./header");
var CardTypes;
(function (CardTypes) {
    CardTypes["twoColumn"] = "TWO_COLUMN";
    CardTypes["threeColumn"] = "THREE_COLUMN";
    CardTypes["fourColumn"] = "FOUR_COLUMN";
    CardTypes["halfSplit"] = "HALF_SPLIT";
    CardTypes["tabHighlight"] = "TAB_HIGHLIGHT";
    CardTypes["imageSlider"] = "IMAGE_SLIDER";
    CardTypes["videoType"] = "VIDEO_TYPE";
    CardTypes["onlyText"] = "ONLY_TEXT";
})(CardTypes = exports.CardTypes || (exports.CardTypes = {}));
exports.emptyCardSection = {
    id: null,
    section_type: header_1.ESectionTypes.basic_card,
    name: header_1.ESectionNames.basic_card,
    position: 0,
    heading: '',
    heading_description: '',
    heading_type: '',
    display_full_description: false,
    cardType: CardTypes.twoColumn,
    cards: [
        {
            id: null,
            position: 0,
            title: '',
            image: [],
            action: { action_name: '', action_link: '' },
            sub_title: '',
            content: '',
        },
    ],
};
exports.emptyCard = {
    id: null,
    position: 0,
    title: '',
    image: [],
    action: { action_name: '', action_link: '' },
    sub_title: '',
    content: '',
};
