import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { QuestionService, Questions } from "@quizbox-fe/qb-utils";
import { Observable, tap } from "rxjs";
import { QuizPageService } from "./quiz-page.service";

export const quizPageResolver: ResolveFn<Questions[]> = (): Observable<Questions[]> => {
  const qnService = inject(QuestionService);
  const que = inject(QuizPageService);
  return qnService.getDefaultQuestions().pipe(
    tap((val) => {
      console.log(val)
      que.setQuestions(val);
    })
  );
}