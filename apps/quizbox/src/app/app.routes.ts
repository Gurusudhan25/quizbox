import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'quizbox' },
  { path: 'quizbox', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) }
];
