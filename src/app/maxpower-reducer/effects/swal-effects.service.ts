import { Injectable } from '@angular/core';
import { SUBMIT_SUCCESS_ALERT, ALERT_COMPLETE, SUBMIT_ERROR_ALERT } from '../reducers/swal-reducer';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ActionWithPayload } from '../action/ActionWithPayload';
import { mergeMap, map } from 'rxjs/operators';
import { SwalService } from '../../maxpower-utils/swal-manager/swal.service';

@Injectable({
  providedIn: 'root'
})
export class SwalEffectsService {

  @Effect()
  swalSubmitSuccess$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(SUBMIT_SUCCESS_ALERT),
    mergeMap(
      (action: ActionWithPayload<any>) => {
        return this.swalService.submitSuccess().pipe(
          map(d => {
            action.payload && action.payload.callback && action.payload.callback(d);
            return {
              type: ALERT_COMPLETE,
              payload: d
            }
          }))
      })
  );

  @Effect()
  swalSubmitError$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(SUBMIT_ERROR_ALERT),
    mergeMap((action: ActionWithPayload<any>) => {
      return this.swalService.submitError().pipe(
        map(d => {
          return {
            type: ALERT_COMPLETE,
            payload: d
          }
        }))
    }));
  constructor(private swalService: SwalService, private actions$: Actions<ActionWithPayload<any>>) {
  }
}
