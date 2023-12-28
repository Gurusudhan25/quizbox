import { Component, OnInit } from "@angular/core";
import { QuizPageService } from "./quiz-page.service";
import { Questions } from "@quizbox-fe/qb-utils";
import { BehaviorSubject, filter, switchMap, tap } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { InstructionDialogComponent } from "./instructions-dialog/instructions-dialog.component";
import { Router } from "@angular/router";

@Component({
  selector: 'quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  questions: Questions[] = [];
  currentQuestionIndex = 0;
  setActiveQuestion: BehaviorSubject<Questions> = new BehaviorSubject(<Questions>{});
  isQuizStarted: boolean = false;
  disableNextBtn = false;
  disablePrevBtn = true;
  

  constructor(
    private quizPageService: QuizPageService,
    private dialog: MatDialog,
    private router: Router
    ) {
  }

  // !This has to be done later
  // @HostListener("window:beforeunload", ["$event"]) 
  // unloadHandler(event: Event) {
  //   event.returnValue = false;
  // }

  ngOnInit(): void {
    this.dialog.open(InstructionDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      autoFocus: false
    }).afterClosed().pipe(
      filter((confirm) => {
        if (!confirm) { this.router.navigateByUrl('/') }
        return confirm
      }),
      switchMap(() => this.quizPageService.getQuestions()),
      tap((question) => {
        this.isQuizStarted = true
        this.questions = question;
        this.setActiveQuestion.next(question[0]);
      })
    ).subscribe();
  }


  changeNextQuestion() {
    if (this.questions.length - 1 > this.currentQuestionIndex) {
      this.currentQuestionIndex++;
      this.setActiveQuestion.next(this.questions[this.currentQuestionIndex]);
      this.disablePrevBtn = false;
    } else {
      this.disableNextBtn = true;
    }
  }

  changePrevQuestion() {
    if (this.currentQuestionIndex >= 0) {
      this.currentQuestionIndex--;
      this.setActiveQuestion.next(this.questions[this.currentQuestionIndex]);
      this.disableNextBtn = false;
    } else {
      this.disablePrevBtn = true;
    }
  }

  getOptionsAsArray() {
    // this has to be done sooner
  }
}