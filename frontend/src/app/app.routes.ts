import { Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';

export const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren: () => import('./shared-components/shared-components.module').then(m => m.SharedComponentsModule)
  },

  {
    path: 'homescreen', component: HomeScreenComponent
  }
];

