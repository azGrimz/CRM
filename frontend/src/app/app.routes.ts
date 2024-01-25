import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren: () => import('./shared-components/shared-components.module').then(m => m.SharedComponentsModule)
  }
];

