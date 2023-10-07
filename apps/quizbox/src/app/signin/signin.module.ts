import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "./signin.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: SigninComponent}
    ])
  ],
  providers: [],
  declarations: [SigninComponent],
  exports: [RouterModule]
})
export class SigninModule {

}