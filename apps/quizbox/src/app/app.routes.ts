import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppModule } from './app.module';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'quizbox' },
  {
    path: 'quizbox',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz-page/quiz-page.module').then(m => m.QuizPageModule)
  }
];

export const appRoutes: ModuleWithProviders<AppModule> = RouterModule.forRoot(routes, {
  initialNavigation: 'enabledBlocking',
  enableTracing: false
});
