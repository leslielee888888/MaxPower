import { Injectable } from '@angular/core';
import { EarningsService } from '../../service/earnings-service/earnings.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionWithPayload } from '../action/ActionWithPayload';
import { EARNINGS_PENDING_QUERY, EARNINGS_PENDING_SUCCESS, EARNINGS_RECEIVE_QUERY, EARNINGS_RECEIVE_SUCCESS } from '../reducers/earnings-reducer';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EarningsEffectService {
  @Effect()
  $earningPendingDeals = this.actions$.pipe(
    ofType(EARNINGS_PENDING_QUERY),
    mergeMap(
      (action: any) => (this.earningsService.getPendingDeals().pipe(map(r => ({ type: EARNINGS_PENDING_SUCCESS, payload: r }))))
    )
  )
  @Effect()
  $earningRecievedDeals = this.actions$.pipe(
    ofType(EARNINGS_RECEIVE_QUERY),
    mergeMap(
      (action: any) => (this.earningsService.getReceivedDeals(action.payload&&action.payload.startDate,action.payload&&action.payload.endDate).pipe(map(r => ({ type: EARNINGS_RECEIVE_SUCCESS, payload: r }))))
    )
  )
  constructor(private earningsService: EarningsService, private actions$: Actions<ActionWithPayload<any>>) { }
}
