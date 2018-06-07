import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaxpowerDashboardComponent } from './maxpower-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MaxpowerDashboardComponent,
    data: {
      title: 'Dashboard'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaxpowerDashboardRoutingModule { }
