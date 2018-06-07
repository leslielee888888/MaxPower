import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaxpowerEarningsComponent } from './maxpower-earnings.component';

const routes: Routes = [{
  path: '',
  component: MaxpowerEarningsComponent,
  data: {
    title: "Earning"
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaxpowerEarningsRoutingModule { }
