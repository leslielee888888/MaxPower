import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EARNINGS_PENDING_QUERY, EARNINGS_RECEIVE_QUERY } from '../maxpower-reducer/reducers/earnings-reducer';
import { Observable } from 'rxjs';
import { MaxpowerPendingEarningsTableSettings, MaxpowerReceivedEarningsTableSettings } from '../config/table.setting';

@Component({
  selector: 'app-maxpower-earnings',
  templateUrl: './maxpower-earnings.component.html',
  styleUrls: ['./maxpower-earnings.component.scss']
})
export class MaxpowerEarningsComponent implements OnInit {

  receive_commission$: Observable<any>;
  pedding_commission$: Observable<any>;
  receivedEarnings$: Observable<any>;
  pengdingEarnings$: Observable<any>;
  MaxpowerPendingEarningsTableSettings = MaxpowerPendingEarningsTableSettings;
  MaxpowerReceivedEarningsTableSettings = MaxpowerReceivedEarningsTableSettings;
  constructor(private store: Store<any>) {
    this.store.dispatch({ type: EARNINGS_PENDING_QUERY });
    this.store.dispatch({ type: EARNINGS_RECEIVE_QUERY });
    this.pengdingEarnings$ = this.store.pipe(select('earnings'), select('pending'));
    this.receivedEarnings$ = this.store.pipe(select('earnings'), select('receive'));
    this.pedding_commission$ = this.store.pipe(select('earnings'), select('pedding_commission'));
    this.receive_commission$ = this.store.pipe(select('earnings'), select('receive_commission'));
  }

  ngOnInit() {
  }

  onDateChange(date){
    this.store.dispatch({ type: EARNINGS_RECEIVE_QUERY,payload:{
      ...date
    } });
  }
}
