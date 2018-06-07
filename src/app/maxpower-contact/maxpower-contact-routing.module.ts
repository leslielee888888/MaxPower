import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaxpowerContactComponent } from './maxpower-contact.component';

const routes: Routes = [
  {
    path: '',
    component: MaxpowerContactComponent,
    data: {
        title: 'Contact'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaxpowerContactRoutingModule { 
  
}
