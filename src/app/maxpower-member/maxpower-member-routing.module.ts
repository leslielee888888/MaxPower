import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaxpowerMemberComponent } from './maxpower-member.component';

const routes: Routes = [
  {
    path: '',
    component: MaxpowerMemberComponent,
    data: {
      title: 'Member'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaxpowerMemberRoutingModule { }
