import { Injectable } from '@angular/core';
import { LoginService } from '../../service/login-service/login.service';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../reducers/login-reducer';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { ActionWithPayload } from '../action/ActionWithPayload';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginEffectService {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(LOGIN),
    mergeMap(
      (action: any) => (this.loginService.doLogin(action.payload && action.payload.username, action.payload && action.payload.password)
        .pipe(map(r => {
          if (r.status === 'Fail') {
            return { type: LOGIN_FAIL, payload: r }
          } else if (r.status === 'Success') {
            this.router.navigate(['/Dashboard'])
            return { type: LOGIN_SUCCESS, payload: r }
          }
        })))
    )
  )
  constructor(private loginService: LoginService, private actions$: Actions<ActionWithPayload<any>>, private router: Router) { }
}
