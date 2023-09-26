import { Component, OnInit } from '@angular/core';
import { AuthService } from '@quizbox-fe/qb-utils';

@Component({
  selector: 'quizbox-fe-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private auth: AuthService) {

  }
  ngOnInit(): void {
      this.auth.checkingApi();
  }
 }
