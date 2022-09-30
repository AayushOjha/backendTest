export type typesOfHeading =
  | ''
  | { name: 'H1'; code: 'h1' }
  | { name: 'H2'; code: 'h2' }
  | { name: 'H3'; code: 'h3' }
  | { name: 'H4'; code: 'h4' }
  | { name: 'H5'; code: 'h5' }
  | { name: 'H6'; code: 'h6' }

export enum ESectionTypes {
  product_section = 'product_section',
  question_and_answers = 'question_and_answers',
  quick_links = 'quick_links',
  review_section = 'review_section',
  basic_card = 'basic_card',
}

export enum ESectionNames {
  product_section = 'Product Section',
  question_and_answers = 'Question and Answer',
  quick_links = 'Quick Links',
  review_section = 'Review Section',
  basic_card = 'Basic Card',
}

export interface IHeader {
  id: number | null
  section_type: ESectionTypes
  state: 'active'
  name: ESectionNames
  position: number
  heading: string
  heading_type: typesOfHeading
  heading_description: string
  display_full_description: boolean
}

export interface IHeaderOptionalSettings {
  fieldVisiablity: {
    heading: boolean
    description: boolean
  }
}
