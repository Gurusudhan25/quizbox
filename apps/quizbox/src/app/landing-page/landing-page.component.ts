import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'quizbox-fe-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {

  constructor(
    private router: Router
  ) {
  }

  navigate(loc: string): void {
    this.router.navigateByUrl(loc);
  }

  startDemoQuiz() {
    this.router.navigate(['quiz'], {
      queryParams: {
        type: 'demo'
      }
    });
  }

}
