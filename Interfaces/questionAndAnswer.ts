import { IHeader, ESectionTypes, ESectionNames } from './header'

export interface IQuestionAndAnswerUnit {
  position: number
  question: string
  answer: string
}
export interface IQuestionAndAnswer extends IHeader {
  section_type: ESectionTypes.question_and_answers
  components: IQuestionAndAnswerUnit[]
}

export const emptyQuestionAndAnswer: IQuestionAndAnswer = {
  id: null,
  section_type: ESectionTypes.question_and_answers,
  name: ESectionNames.question_and_answers,
  state: 'active',
  position: 0,
  heading: '',
  heading_type: '',
  heading_description: '',
  display_full_description: false,
  components: [{ position: 0, question: '', answer: '' }],
}
