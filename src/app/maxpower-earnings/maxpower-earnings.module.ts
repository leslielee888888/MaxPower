import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaxpowerEarningsRoutingModule } from './maxpower-earnings-routing.module';
import { MaxpowerEarningsComponent } from './maxpower-earnings.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MaxpowerUtilsModule } from '../maxpower-utils/maxpower-utils.module';

@NgModule({
  imports: [
    CommonModule,
    MaxpowerEarningsRoutingModule,
    Ng2SmartTableModule,
    MaxpowerUtilsModule
  ],
  declarations: [MaxpowerEarningsComponent]
})
export class MaxpowerEarningsModule { }
