import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaxpowerContactRoutingModule } from './maxpower-contact-routing.module';
import { MaxpowerContactComponent } from './maxpower-contact.component';
@NgModule({
  imports: [
    CommonModule,
    MaxpowerContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MaxpowerContactComponent]
})
export class MaxpowerContactModule { }
