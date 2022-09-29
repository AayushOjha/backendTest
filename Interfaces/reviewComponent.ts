import { IHeader, ESectionNames, ESectionTypes } from './header';
import { IImage } from './commonInterfaces';
export interface IReviewCard {
  position: number;
  customerName: string;
  profilePicture: IImage | null;
  rating: number;
  reviewText: string;
  reviewImages: IImage[];
  productName: string;
}

export interface IReviewComponent extends IHeader {
  section_type: 'review_section';
  name: 'review_section';
  reviews: IReviewCard[];
}

export const emptyReviewComponent: IReviewComponent = {
  id: null,
  section_type: 'review_section',
  name: 'review_section',
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
