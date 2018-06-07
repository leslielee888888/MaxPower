import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { MaxpowerDashboardTableSettings, MaxpowerDashboardSubTableSettings } from '../config/table.setting';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatePickerComponent } from '../maxpower-utils/custom-date-picker/custom-date-picker.component';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DASHBOARD_QUERY } from '../maxpower-reducer/reducers/dashboard-reducer';
interface DashboardDataSource {
  level1: Level
  level2: Level
}
interface Level {
  "id": string; "company_name": string; "contact_person": string; "contact_number": string; "last_login_date": string; "sign_up_date": string; "trackID": string; "total": number; "total_settled": string; "total_deal": string; "commission": number;
}

@Component({
  selector: 'app-maxpower-dashboard',
  templateUrl: './maxpower-dashboard.component.html',
  styleUrls: ['./maxpower-dashboard.component.scss']
})
export class MaxpowerDashboardComponent implements OnInit {
  level2$: Observable<any>;
  level1$: Observable<any>;
  MaxpowerDashboardTableSettings = MaxpowerDashboardTableSettings;
  MaxpowerDashboardSubTableSettings = MaxpowerDashboardSubTableSettings;

  constructor(private modalService: NgbModal, private store: Store<DashboardDataSource>) {
    this.store.dispatch({ type: DASHBOARD_QUERY });
    this.level1$ = this.store.pipe(select('dashboard'), select('level1'));
    this.level2$ = this.store.pipe(select('dashboard'), select('level2'));
  }

  ngOnInit() {
  }
  
  onDateChange($event){
    this.store.dispatch({
      type: DASHBOARD_QUERY, payload: {
        ...$event
      }
    })
  }

}
