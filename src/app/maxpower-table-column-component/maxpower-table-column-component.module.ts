import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatComponent } from './currency-format/currency-format.component';
import { MemberTableNameComponent } from './member-table-name/member-table-name.component';
import { ActivityFormatComponent } from './activity-format/activity-format.component';
import { DateFormatComponent } from './date-format/date-format.component';
import { StatusFormatComponent } from './status-format/status-format.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrencyFormatComponent, DateFormatComponent, MemberTableNameComponent, ActivityFormatComponent, StatusFormatComponent],
  entryComponents: [CurrencyFormatComponent, DateFormatComponent, MemberTableNameComponent, ActivityFormatComponent, StatusFormatComponent]
})
export class MaxpowerTableColumnComponentModule { }
