import { IQuestionAndAnswer } from './questionAndAnswer';
import { IReviewComponent } from './reviewComponent';
import { IProductSection } from './productsection';
import { IQuickLinks } from './quickLinks';
import { ICardSection } from './card';

export type PageComponents =
  | IQuestionAndAnswer
  | IReviewComponent
  | IProductSection
  | IQuickLinks
  | ICardSection;
export interface IEditor {
  sections: Array<PageComponents>;
}
