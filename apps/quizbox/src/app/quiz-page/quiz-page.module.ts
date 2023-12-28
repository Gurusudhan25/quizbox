import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";
import { QuizPageComponent } from "./quiz-page.component";
import { QuizPageService } from "./quiz-page.service";
import { InstructionDialogComponent } from "./instructions-dialog/instructions-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { NgLetModule } from 'ng-let';

import { CommonModule } from "@angular/common";

// Todo: add resolve for dynamic data 
import { quizPageResolver } from "./quiz-page.resolve.service";

const route = RouterModule.forChild([
  {
    path: '', component: QuizPageComponent, resolve: {
      Questions: quizPageResolver
    }
  }
]);
@NgModule({
  imports: [
    route,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatRadioModule,
    NgLetModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [QuizPageComponent, InstructionDialogComponent],
  providers: [QuizPageService]
})
export class QuizPageModule {

}