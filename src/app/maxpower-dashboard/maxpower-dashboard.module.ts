import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaxpowerDashboardRoutingModule } from './maxpower-dashboard-routing.module';
import { MaxpowerDashboardComponent } from './maxpower-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MaxpowerTableColumnComponentModule } from '../maxpower-table-column-component/maxpower-table-column-component.module';
import { FormsModule } from '@angular/forms';
import { MaxpowerUtilsModule } from '../maxpower-utils/maxpower-utils.module';
import { StoreModule } from '@ngrx/store';


@NgModule({
  imports: [
    CommonModule,
    MaxpowerDashboardRoutingModule,
    NgbModule,
    Ng2SmartTableModule,
    FormsModule,
    MaxpowerUtilsModule
  ],
  declarations: [MaxpowerDashboardComponent],
  providers: [

  ]
})
export class MaxpowerDashboardModule { }
