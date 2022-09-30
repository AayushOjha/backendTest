import { IImage, IAction } from './commonInterfaces'
import { IHeader, ESectionNames, ESectionTypes } from './header'

export enum CardTypes {
  twoColumn = 'TWO_COLUMN',
  threeColumn = 'THREE_COLUMN',
  fourColumn = 'FOUR_COLUMN',
  halfSplit = 'HALF_SPLIT',
  tabHighlight = 'TAB_HIGHLIGHT',
  imageSlider = 'IMAGE_SLIDER',
  videoType = 'VIDEO_TYPE',
  onlyText = 'ONLY_TEXT',
}
export interface ICard {
  id: number | null
  position: number
  title: string
  image: IImage[]
  links: IAction
  sub_title: string
  content: string
}

export interface ICardOptionalSettings {
  fieldVisiablity: {
    title: boolean
    links: boolean
    sub_title: boolean
    content: boolean
    image: boolean
    multipleCard: boolean
    cardVisiable: boolean
  }
}

export interface ICardSection extends IHeader {
  section_type: 'basic_card';
  name: 'Basic Card';
  cardType:
    | 'TWO_COLUMN'
    | 'THREE_COLUMN'
    | 'FOUR_COLUMN'
    | 'HALF_SPLIT'
    | 'TAB_HIGHLIGHT'
    | 'IMAGE_SLIDER'
    | 'VIDEO_TYPE'
    | 'ONLY_TEXT';
  cards: ICard[]
}

export const emptyCardSection: ICardSection = {
  id: null,
  section_type: ESectionTypes.basic_card,
  name: ESectionNames.basic_card,
  state: 'active',
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
      links: { action_name: '', action_link: '' },
      sub_title: '',
      content: '',
    },
  ],
}

export const emptyCard: ICard = {
  id: null,
  position: 0,
  title: '',
  image: [],
  links: { action_name: '', action_link: '' },
  sub_title: '',
  content: '',
}
