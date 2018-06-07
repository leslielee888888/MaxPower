import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EarningsService {

  constructor(private http: HttpService) { }

  getPendingDeals() {
    return this.http.Get('referral/MaxPower/PendingDeals');
  }

  getReceivedDeals(from = moment().add(-30, 'd').format('YYYY-MM-DD'), to = moment().format('YYYY-MM-DD')) {
    return this.http.Get('referral/MaxPower/ReceivedDeals',`from=${from}&to=${to}`);
  }
}
