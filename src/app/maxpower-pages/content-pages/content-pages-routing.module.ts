
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberProfilePageComponent } from '../member-profile-page/member-profile-page.component';
import { ComingSoonPageComponent } from './coming-soon/coming-soon-page.component';

export const routes: Routes = [
  {
    path: 'coming-soon',
    component: ComingSoonPageComponent,
    data: {
      title: 'Coming Soon'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPagesRoutingModule { }
