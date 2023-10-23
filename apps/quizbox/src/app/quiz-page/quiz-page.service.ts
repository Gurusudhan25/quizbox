import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { withEntities, setEntities } from '@ngneat/elf-entities'
import { Questions } from '@quizbox-fe/qb-utils';

const questionStore = createStore({ name: 'questions' }, withEntities<Questions>());

@Injectable({ providedIn: 'root' })
export class QuizPageService {

  public setQuestions(questions: Questions[]): void {
    questionStore.update(setEntities(questions));
  }

  public getQuestions() {
    return questionStore.getValue().entities;
  }
}