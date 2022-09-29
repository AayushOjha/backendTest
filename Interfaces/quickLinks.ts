import { IHeader, ESectionNames, ESectionTypes } from './header'
import { IAction } from './commonInterfaces'

export interface ILink extends IAction {
  position: number
}

export interface ILinkCard {
  category_name: string
  position: number
  links: ILink[]
}

export interface IQuickLinks extends IHeader {
  section_type: ESectionTypes.quick_links
  name: ESectionNames.quick_links
  link_cards: ILinkCard[]
}

export const emptyQuickLinks: IQuickLinks = {
  id: null,
  section_type: ESectionTypes.quick_links,
  name: ESectionNames.quick_links,
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
}
