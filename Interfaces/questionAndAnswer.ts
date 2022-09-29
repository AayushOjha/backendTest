import { IHeader, ESectionTypes, ESectionNames } from './header';

export interface IQuestionAndAnswerUnit {
  position: number;
  question: string;
  answer: string;
}
export interface IQuestionAndAnswer extends IHeader {
  section_type: 'question_and_answers';
  name: 'Question and Answer';
  components: IQuestionAndAnswerUnit[];
}

export const emptyQuestionAndAnswer: IQuestionAndAnswer = {
  id: null,
  section_type: 'question_and_answers',
  name: 'Question and Answer',
  position: 0,
  heading: '',
  heading_type: '',
  heading_description: '',
  display_full_description: false,
  components: [{ position: 0, question: '', answer: '' }],
};
