import { Component, OnInit, Input } from '@angular/core';
import { MaxpowerDealsActivitiesTableSettings } from '../../config/table.setting';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { MEMBER_DEALS_QUERY } from '../../maxpower-reducer/reducers/member-profile-reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deal-activities',
  templateUrl: './deal-activities.component.html',
  styleUrls: ['./deal-activities.component.scss']
})
export class DealActivitiesComponent implements OnInit {
  @Input() eid;
  deals$: Observable<any>;
  // dataSource: { "event": string; "member_id": string; "company_name": string; "event_date": string; "app_id": string; }[];
  MaxpowerDealsActivitiesTableSettings = MaxpowerDealsActivitiesTableSettings;
  constructor(private store: Store<any>, private route: ActivatedRoute) {
    /* this.route.paramMap.pipe(select('params'), select('eid')).subscribe(eid => {
      this.store.dispatch({
        type: MEMBER_DEALS_QUERY, payload: {
          eid
        }
      })
    }) */
  }

  ngOnInit() {
    this.deals$ = this.store.pipe(select('member'), select('deals'));
    if (this.eid) {
      this.store.dispatch({
        type: MEMBER_DEALS_QUERY, payload: {
          eid: this.eid
        }
      })
    }
    // this.dataSource = [
    //   { "event": "New Deal", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2018-03-27 09:13:56", "app_id": "AJ3QMO" },
    //   { "event": "New Deal", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2018-02-22 15:32:43", "app_id": "OJ3QVD" },
    //   { "event": "New Deal", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2018-02-22 09:07:26", "app_id": "DJ3Q2A" },
    //   { "event": "New Deal", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2018-02-21 15:12:52", "app_id": "AJ3QNO" },
    //   { "event": "New Deal", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2018-02-21 14:07:49", "app_id": "OJ3QSD" },
    //   { "event": "Referral Fee $20 has been paid", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2016-09-12 15:25:40", "app_id": "OEPE2D" },
    //   { "event": "Referral Fee $15 has been paid", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2016-09-12 15:25:35", "app_id": "OEPE3D" },
    //   { "event": "Referral Fee $15 has been paid", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2016-09-12 15:25:35", "app_id": "AEP71D" },
    //   { "event": "Referral Fee $20 pending payment", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2016-09-12 15:24:42", "app_id": "OEPE2D" },
    //   { "event": "Referral Fee $15 pending payment", "member_id": "ODC6AD", "company_name": "sub", "event_date": "2016-09-12 15:24:40", "app_id": "OEPE3D" }
    // ];
  }

}
