import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { ActionWithPayload } from '../action/ActionWithPayload';
import { Observable, timer, of, interval } from 'rxjs';
import { mergeMap, map, switchMap, timeout, mapTo } from 'rxjs/operators';
import { MEMBER_PROFILE_QUERY, MEMBER_PROFILE_SUCCESS, MEMBER_DEALS_QUERY, MEMBER_DEALS_SUCCESS, MEMBER_PROFILE_SUBMIT, MEMBER_PROFILE_SUBMIT_SUCCESS, MEMBER_PROFILE_ADD_SUBMIT, MEMBER_PROFILE_AUTO_SAVE, MEMBER_PROFILE_AUTO_SAVE_SUCCESS, MEMBER_PROFILE_AUTO_SAVE_FAIL, MEMBER_PROFILE_AUTO_SAVE_HIDE, MEMBER_PROFILE_AUTO_SAVE_SAVING } from '../reducers/member-profile-reducer';
import { MemberService } from '../../service/member-service/member.service';
import { Store } from '@ngrx/store';
import { SUBMIT_SUCCESS_ALERT, SUBMIT_ERROR_ALERT, ALERT_COMPLETE } from '../reducers/swal-reducer';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class MemberProfileEffectService {
  autosaveTimer = timer(3000);
  @Effect()
  memberQuery$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_PROFILE_QUERY),
    mergeMap((action: ActionWithPayload<any>) => {
      return this.memberService.getMember(action.payload && action.payload.eid).pipe(
        map(d => ({
          type: MEMBER_PROFILE_SUCCESS,
          payload: d[0]
        })))
    }));

  @Effect()
  memberDealsQuery$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_DEALS_QUERY),
    mergeMap((action: ActionWithPayload<any>) => {
      return this.memberService.getMemberDealsActivities(action.payload && action.payload.eid, action.payload && action.payload.page).pipe(
        map(d => ({
          type: MEMBER_DEALS_SUCCESS,
          payload: d
        })))
    }));

  @Effect()
  memberProfileSubmit$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_PROFILE_SUBMIT),
    mergeMap((action: ActionWithPayload<any>) => {
      return this.memberService.updateMember(action.payload && action.payload.member).pipe(
        map((d: any) => {
          /*  return {
             type: MEMBER_PROFILE_SUBMIT_SUCCESS,
             payload: d
           } */
          return {
            type: d.status === 'Success' ? SUBMIT_SUCCESS_ALERT : SUBMIT_ERROR_ALERT
          }
        }))
    }));

  @Effect()
  memberProfileAddSubmit$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_PROFILE_ADD_SUBMIT),
    mergeMap(
      (action: ActionWithPayload<any>) => {
        return this.memberService.addMember(action.payload && action.payload.member).pipe(
          map((d: any) => {
            return {
              type: d.status === 'Success' ? SUBMIT_SUCCESS_ALERT : SUBMIT_ERROR_ALERT,
              payload: {
                callback: action.payload.callback
              }
            }
          })
        )
      }
    )
  );

  @Effect()
  memberProfileAutoSaveSubmit$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_PROFILE_AUTO_SAVE),
    switchMap(
      (action: ActionWithPayload<any>) => {
        return timer(1000).pipe(mergeMap(
          (i) => {
            this.store.dispatch({ type: MEMBER_PROFILE_AUTO_SAVE_SAVING });
            return timer(1000).pipe(mergeMap(v => {
              return this.memberService.updateMember(action.payload && action.payload.member).pipe(
                map((d: any) => {
                  if(action.payload && action.payload.callback){
                    action.payload.callback();
                  }
                  return {
                    type: d.status === 'Success' ? MEMBER_PROFILE_AUTO_SAVE_SUCCESS : MEMBER_PROFILE_AUTO_SAVE_FAIL,
                  }
                })
              )
            }))
          }))
      }
    )
  );
  /* @Effect()
  memberProfileAutoSaveSubmit$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_PROFILE_AUTO_SAVE),
    switchMap(
      (action: ActionWithPayload<any>) => {
        return timer(1000).pipe(
          mergeMap(
            val => [
              {
                type: MEMBER_PROFILE_AUTO_SAVE_SAVING
              },
            ]
          )
        )
      }
    )
  ); */
  @Effect()
  memberProfilAutoSaveSuccess$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_PROFILE_AUTO_SAVE_SUCCESS),
    mergeMap(
      (action: ActionWithPayload<any>) => {
        return timer(1000).pipe(mapTo({
          type: MEMBER_PROFILE_AUTO_SAVE_HIDE
        }))
      }
    )
  );
  @Effect()
  memberProfilAutoSaveFail$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_PROFILE_AUTO_SAVE_FAIL),
    mergeMap(
      (action: ActionWithPayload<any>) => {
        return timer(1000).pipe(mapTo({
          type: MEMBER_PROFILE_AUTO_SAVE_HIDE
        }))
      }
    )
  );
  constructor(private memberService: MemberService, private actions$: Actions<ActionWithPayload<any>>, private store: Store<any>) {
  }
}