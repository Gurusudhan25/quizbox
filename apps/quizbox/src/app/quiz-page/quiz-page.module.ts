import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { QuizPageComponent } from "./quiz-page.component";
import { QuizPageService } from "./quiz-page.service";

// Todo: add resolve for dynamic data 
// import { quizPageResolver } from "./quiz-page.resolve.service";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: QuizPageComponent, resolve: {
      // Questions: quizPageResolver
    } }
  ])],
  declarations: [QuizPageComponent],
  providers: [QuizPageService]
})
export class QuizPageModule {

}