import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: LandingPageComponent }]),
    CommonModule,
    MatButtonModule,
  ],
})
export class LandingPageModule { }
