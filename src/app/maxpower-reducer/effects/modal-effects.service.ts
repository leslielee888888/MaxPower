import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ActionWithPayload } from '../action/ActionWithPayload';
import { ModalService } from '../../maxpower-utils/modal-manager/modal.service';
import { OPEN_MEMBER_PROFILE_MODAL, CLOSE_MEMBER_PROFILE_MODAL, OPEN_MEMBER_PROFILE_MODAL_SUCCESS, CLOSE_MEMBER_PROFILE_MODAL_SUCCESS, OPEN_MEMBER_PROFILE_EDIT_MODAL, CLOSE_MEMBER_PROFILE_EDIT_MODAL_SUCCESS, CLOSE_MEMBER_PROFILE_EDIT_MODAL } from '../reducers/modal-reducer';
import { mergeMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModalEffectsService {
  @Effect()
  openMemberProfileModal$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(OPEN_MEMBER_PROFILE_MODAL),
    map(r => {
      this.modalService.openMemberProfileModal()
      return {
        type: CLOSE_MEMBER_PROFILE_MODAL_SUCCESS
      }
    })
    /* mergeMap((action: ActionWithPayload<any>) => {
      return this.modalService.openMemberProfileModal().pipe(
        map(r => {
          console.log(r);
          return {
            type: CLOSE_MEMBER_PROFILE_MODAL_SUCCESS
          }
        })
      )
    }), */
  );

  @Effect()
  closenMemberProfileModal$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(CLOSE_MEMBER_PROFILE_MODAL),
    map(r => {
      this.modalService.closeMemberProfileModal()
      return {
        type: CLOSE_MEMBER_PROFILE_MODAL_SUCCESS
      }
    })
  );


  @Effect()
  openMemberProfileEditModal$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(OPEN_MEMBER_PROFILE_EDIT_MODAL),
    map((action : ActionWithPayload<any>) => {
      this.modalService.openMemberProfileEditModal(action.payload && action.payload.eid);
      return {
        type: CLOSE_MEMBER_PROFILE_EDIT_MODAL_SUCCESS
      }
    })
    /* mergeMap((action: ActionWithPayload<any>) => {
      return this.modalService.openMemberProfileEditModal(action.payload && action.payload.eid).pipe(
        map(r => {
          console.log(r);
          return {
            type: CLOSE_MEMBER_PROFILE_EDIT_MODAL_SUCCESS
          }
        })
      )
    }), */
  );

  @Effect()
  closenMemberProfileEditModal$: Observable<ActionWithPayload<any>> = this.actions$.pipe(
    ofType(CLOSE_MEMBER_PROFILE_EDIT_MODAL),
    map((action : ActionWithPayload<any>) => {
      this.modalService.closeMemberProfileEditModal().result.then((r)=>{
        if(action.payload && action.payload.callback){
          action.payload.callback(r);
        }
      })
      return {
        type: CLOSE_MEMBER_PROFILE_EDIT_MODAL_SUCCESS
      }
    })
  );
  constructor(private modalService: ModalService, private actions$: Actions<ActionWithPayload<any>>) {
  }
}
