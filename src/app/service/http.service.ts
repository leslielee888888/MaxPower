import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Observer, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Store, select } from '@ngrx/store';

@Injectable()
export class HttpService {
  token: Observable<any>;
  headers: HttpHeaders;
  private domain;
  postHttpOptions: {};
  constructor(private http: HttpClient, private router: Router, private store: Store<any>) {
    this.domain = 'http://192.168.1.240/';
    this.headers = new HttpHeaders()
    // .set('Accept', 'application/text')
    // .set('X-Requested-With', 'XMLHttpRequest')
    // .set('Client-Security-Token','eyJyIjo3MTE0LCJwIjoxMjU5LCJxIjo4ODQyfQ==');
    this.postHttpOptions = {
      headers: this.headers,
      responseType: 'text'
    };
    if (environment.production) {
      this.postHttpOptions = {
        headers: new HttpHeaders({
          'X-Requested-With': 'XMLHttpRequest'
        }),
        responseType: 'text'
      };
    } else {
      this.postHttpOptions = {
        headers: new HttpHeaders({
          'X-Requested-With': 'XMLHttpRequest',
          // 'Client-Security-Token': 'eyJyIjo4MzA2LCJwIjoyNDQzLCJxIjoxMTIxOH0='
        }),
        responseType: 'text',
      };
      this.store.pipe(select('login'), select('message')).subscribe(r => {
        this.token = r
        if (r) {
          this.postHttpOptions = {
            headers: new HttpHeaders({
              'X-Requested-With': 'XMLHttpRequest',
              'Client-Security-Token': r
            }),
            responseType: 'text'
          }
        }
      });
    }

  }

  Get(url: string, params?: string): Observable<any> {
    const p = params ? `?${params}` : ''
    return Observable.create((ob: Observer<any>) => {
      this.http.get(`${this.domain}${url}${p}`, this.postHttpOptions).pipe(catchError(this.handleError())).subscribe((data: string) => {
        let rs;
        try {
          rs = JSON.parse(data);
        } catch (e) {
          rs = data;
          console.log('httpClient Get Error', e);
        }
        ob.next(rs);
        ob.complete();
      });

    });
    // return this.http.get(`${this.domain}${url}?trackID=${this.trackID}&${params}`, this.postHttpOptions)
  }

  Post(url: string, params?: HttpParams): Observable<any> {

    return Observable.create((ob: Observer<any>) => {
      this.http.post(`${this.domain}${url}`, params, this.postHttpOptions).pipe(catchError(this.handleError())).subscribe(data => {
        let rs;
        try {
          rs = JSON.parse(data as string);
        } catch (e) {
          rs = data;
          console.log('httpClient Post Error', e);
        }
        ob.next(rs);
        ob.complete();
      });

    });
    // return this.http.post(`${this.domain}${url}`, params, this.postHttpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 401 && this.router.url.indexOf('login') < 0) {
        swal({
          type: "info",
          title: 'Leave for  long time',
          text: 'For your infomation safty, Please sign in again.',
          confirmButtonText: 'Sign In',
        }).then(r => {
          this.router.navigate(['/pages/login'])
        })
        // this.router.navigate(['/pages/login'])
      }
      return of(result as T);
    };
  }

}
