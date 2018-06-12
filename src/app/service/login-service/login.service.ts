import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }


  doLogin(username = '', password = '') {
    const httpParams = new HttpParams()
      .set('referral-uname', username)
      .set('referral-pwd', password);
      console.log(username,password);
    // return this.http.Post('login-token', httpParams);
    return this.http.Post('referral/function/login-token.php', httpParams)
  }
}
