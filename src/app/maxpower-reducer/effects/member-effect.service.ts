import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ActionWithPayload } from '../action/ActionWithPayload';
import { MEMBER_QUERY, MEMBER_SUCCESS, MEMBER_PENDING_QUERY, MEMBER_PENDING_SUCCESS } from '../reducers/member-reducer';
import { mergeMap, map } from 'rxjs/operators';
import { MemberService } from '../../service/member-service/member.service';

@Injectable({
  providedIn: 'root'
})
export class MemberEffectService {
  @Effect()
  memberQuery$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_QUERY),
    mergeMap((action: ActionWithPayload<any>) => {
      return this.memberService.getMembers(action.payload && action.payload.startDate, action.payload && action.payload.endDate).pipe(
        map(d => ({
          type: MEMBER_SUCCESS,
          payload: d
        })))
    }));
  @Effect()
  pendingMemberQuery$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(MEMBER_PENDING_QUERY),
    mergeMap((action: ActionWithPayload<any>) => {
      return this.memberService.getPendingMembers().pipe(
        map(d => ({
          type: MEMBER_PENDING_SUCCESS,
          payload: d
        })))
    }));
  constructor(private memberService: MemberService, private actions$: Actions<ActionWithPayload<any>>) {
  }
}
