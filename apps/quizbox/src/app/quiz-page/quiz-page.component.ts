import { Component, OnInit } from "@angular/core";
import { QuizPageService } from "./quiz-page.service";
import { sampleQuestions } from "@quizbox-fe/qb-utils";

@Component({
  selector: 'quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  constructor(private quizPageService: QuizPageService) {
    quizPageService.setQuestions(sampleQuestions);
  }

  ngOnInit(): void {
    this.quizPageService.getQuestions()
  }

}