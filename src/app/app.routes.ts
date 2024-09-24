import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/introduction/introduction.component').then(c => c.IntroductionComponent),
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
