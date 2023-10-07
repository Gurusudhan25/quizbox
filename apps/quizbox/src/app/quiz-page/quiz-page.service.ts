import { createStore } from '@ngneat/elf';
import { setEntities, withEntities } from '@ngneat/elf-entities'
import { Questions, sampleQuestions } from '@quizbox-fe/qb-utils';

const questionStore = createStore({ name: 'questions' }, withEntities<Questions>());

export class QuizPageService {

  public setQuestions(questions: Questions[]): void {
    questionStore.update((setEntities(questions)));
  }

  public getQuestions() {
    console.log(questionStore.getValue());
  }
}