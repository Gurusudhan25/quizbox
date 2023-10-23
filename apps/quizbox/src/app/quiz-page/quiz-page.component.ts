import { Component } from "@angular/core";
import { QuizPageService } from "./quiz-page.service";

@Component({
  selector: 'quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent {
  questions;

  constructor(private quizPageService: QuizPageService) {
    this.questions = this.quizPageService.getQuestions()
  }


}