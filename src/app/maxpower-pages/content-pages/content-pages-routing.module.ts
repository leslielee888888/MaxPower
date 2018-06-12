
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonPageComponent } from './coming-soon/coming-soon-page.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'coming-soon',
    component: ComingSoonPageComponent,
    data: {
      title: 'Coming Soon'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPagesRoutingModule { }
