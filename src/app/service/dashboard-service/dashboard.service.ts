import { HttpService } from './../http.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpService) { }

  getStaffDashboard(startData: string = '2016-01-01', endDate: string = '2018-12-31'): Observable<any> {
    const params = `from=${startData}&to=${endDate}`;
    return this.http.Get('referral/MaxPower/DashboardData', params);
  } 
}
