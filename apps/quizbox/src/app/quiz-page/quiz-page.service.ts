import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { withEntities, setEntities, selectAllEntities, withActiveId, selectActiveEntity } from '@ngneat/elf-entities'
import { Questions } from '@quizbox-fe/qb-utils';
import { Observable } from 'rxjs';

const questionStore = createStore({ name: 'questions' }, withEntities<Questions>(), withActiveId());

@Injectable({ providedIn: 'root' })
export class QuizPageService {

  public setQuestions(questions: Questions[]): void {
    questionStore.update(setEntities(questions));
  }

  public getActiveQuestion() {
    return questionStore.pipe(selectActiveEntity())
  }

  public getQuestions(): Observable<Questions[]> {
    return questionStore.pipe(selectAllEntities());
  }
}