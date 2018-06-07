import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxpowerUtilsModule } from '../../maxpower-utils/maxpower-utils.module';
import { ComingSoonPageComponent } from './coming-soon/coming-soon-page.component';

@NgModule({
  imports: [
    CommonModule,
    ContentPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaxpowerUtilsModule
  ],
  declarations:  [ComingSoonPageComponent]
})
export class ContentPagesModule { }
