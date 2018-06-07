import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, tap, map } from 'rxjs/operators';
import { DASHBOARD_QUERY, DASHBOARD_SUCCESS } from '../reducers/dashboard-reducer';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../service/http.service';
import { ActionWithPayload } from '../action/ActionWithPayload';
import { DashboardService } from '../../service/dashboard-service/dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardEffectService {
  @Effect()
  dashboardQuery$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(DASHBOARD_QUERY),
    mergeMap((action: ActionWithPayload<any>) => {
      return this.dashboardService.getStaffDashboard(action.payload && action.payload.startDate, action.payload && action.payload.endDate).pipe(
        map(d => ({
          type: DASHBOARD_SUCCESS,
          payload: d
        })))
    }));
  constructor(private dashboardService: DashboardService, private actions$: Actions<ActionWithPayload<any>>) {
  }
}
