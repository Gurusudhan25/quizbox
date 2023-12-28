import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService, Questions } from '@quizbox-fe/qb-utils';
import { tap } from 'rxjs';
import { QuizPageService } from '../quiz-page/quiz-page.service';

@Component({
  selector: 'quizbox-fe-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {

  constructor(
    private router: Router,
    private qnService: QuestionService,
    private qbPageService: QuizPageService
  ) {
  }

  navigate(loc: string): void {
    this.router.navigateByUrl(loc);
  }

  startDemoQuiz() {
    this.qnService.getDefaultQuestions().pipe(
      tap((questions: Questions[]) => {
        this.qbPageService.setQuestions(questions);
        this.router.navigate(['quiz'], { queryParams: { type: 'demo' } });
      })
    ).subscribe();
  }

}
