import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaxpowerMemberRoutingModule } from './maxpower-member-routing.module';
import { MaxpowerMemberComponent } from './maxpower-member.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MaxpowerTableColumnComponentModule } from '../maxpower-table-column-component/maxpower-table-column-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxpowerUtilsModule } from '../maxpower-utils/maxpower-utils.module';

@NgModule({
  imports: [
    CommonModule,
    MaxpowerMemberRoutingModule,
    NgbModule,
    Ng2SmartTableModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MaxpowerMemberComponent
  ],
})
export class MaxpowerMemberModule { }
