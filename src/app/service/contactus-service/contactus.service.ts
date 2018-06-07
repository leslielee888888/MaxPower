import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpService) { }
  doContactUs(msg: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let httpParams = new HttpParams();
    /* const user = this.uesrService.getUser();
    httpParams.set('contact_person', user.contact_person)
    httpParams.set('contact_number', user.contact_number)
    httpParams.set('email', user.email) */
    httpParams.set('msg', msg)
    return this.http.Post("function/contact-us", httpParams);
  }
}
