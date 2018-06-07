import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpService) { }

  getMembers(startData: string = '2016-01-01', endDate: string = '2018-12-31'): Observable<any> {
    const params = `from=${startData}&to=${endDate}`;
    return this.http.Get('referral/MaxPower/MemberManagementData', params);
  }

  getPendingMembers(){
    return this.http.Get('referral/MaxPower/PendingMembersData');
  }

  getMember(eid: string): Observable<any> {
    const params = `eid=${eid}`;
    return this.http.Get('referral/MaxPower/MemberProfileData', params);
  }

  updateMember(member) {
    const httpParams = new HttpParams({ fromObject: member})
    return this.http.Post('referral/MaxPower/UpdateMember', httpParams);
  }

  addMember(member){
    const httpParams = new HttpParams({ fromObject: member})
    return this.http.Post('referral/MaxPower/AddMember', httpParams);
    
  }

  getMemberDealsActivities(eid: string, page: number = 1): Observable<any> {
    const params = `eid=${eid}&page=${page}`;
    return this.http.Get('referral/MaxPower/MemberDealAvtivitiesData', params);
  }
}
