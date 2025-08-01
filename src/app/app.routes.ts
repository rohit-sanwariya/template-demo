import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'parent-table',
    pathMatch: 'full'
  },
  {
    path: 'parent-table',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  }
];
