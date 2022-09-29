import { IHeader, ESectionNames, ESectionTypes } from './header'

export interface IProductSection extends IHeader {
  section_type: ESectionTypes.product_section
  name: ESectionNames.product_section
  show_as_varient: boolean
  products: any[] //TODO: Create Product Interface.
}

export const emptyProductSection: IProductSection = {
  id: null,
  section_type: ESectionTypes.product_section,
  name: ESectionNames.product_section,
  position: 0,
  heading: '',
  heading_type: '',
  heading_description: '',
  display_full_description: false,
  show_as_varient: false,
  products: [],
}
