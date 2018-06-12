import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DealActivitiesComponent } from './deal-activities/deal-activities.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MaxpowerTableColumnComponentModule } from '../maxpower-table-column-component/maxpower-table-column-component.module';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { MaxpowerReducerModule } from '../maxpower-reducer/maxpower-reducer.module';
import { SharedModule } from '../shared/shared.module';
import { MemberProfileModalComponent } from './modal-manager/member-profile-modal/member-profile-modal.component';
import { AutoSaveComponent } from './auto-save/auto-save.component';
import { MemberProfileEditModalComponent } from './modal-manager/member-profile-edit-modal/member-profile-edit-modal.component';
// import { LesFormatterModule } from 'src/app/les-formatter/les-formatter.module';
// import { FormatterDirective } from '../les-formatter/formatter.directive';
import { LeslieFormatterModule } from 'leslie-formatter';
// import { LesFormatterModule } from 'leslie-formatter';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    MaxpowerTableColumnComponentModule,
    LeslieFormatterModule
  ],
  declarations: [
    CustomDatePickerComponent,
    MemberProfileComponent,
    DealActivitiesComponent,
    DateSelectorComponent,
    // FormatterDirective,
    MemberProfileModalComponent,
    AutoSaveComponent,
    MemberProfileEditModalComponent
  ],
  entryComponents: [
    CustomDatePickerComponent,
    MemberProfileComponent,
    DealActivitiesComponent,
    DateSelectorComponent,
    MemberProfileModalComponent,
    AutoSaveComponent,
    MemberProfileEditModalComponent
  ],
  exports: [
    CustomDatePickerComponent,
    MemberProfileComponent,
    DealActivitiesComponent,
    DateSelectorComponent,
    // FormatterDirective,
    MemberProfileModalComponent,
    AutoSaveComponent,
    MemberProfileEditModalComponent,
    MaxpowerTableColumnComponentModule
  ]
})
export class MaxpowerUtilsModule { }
