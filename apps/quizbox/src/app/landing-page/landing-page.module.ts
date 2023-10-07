import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(
      [{ path: '', component: LandingPageComponent }]
    ),
  ],
})
export class LandingPageModule { }
