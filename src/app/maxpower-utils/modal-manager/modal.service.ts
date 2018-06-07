import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MemberProfileModalComponent } from './member-profile-modal/member-profile-modal.component';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CLOSE_MEMBER_PROFILE_MODAL } from '../../maxpower-reducer/reducers/modal-reducer';
import { MemberProfileEditModalComponent } from './member-profile-edit-modal/member-profile-edit-modal.component';
import { Store } from '@ngrx/store';
import { MEMBER_PROFILE_FORM_RESET } from '../../maxpower-reducer/reducers/member-profile-reducer';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  memberProfileEditRef: NgbModalRef;
  memberProfileRef: NgbModalRef;
  NgbModalOptions: NgbModalOptions
  constructor(private ngbModal: NgbModal, private store: Store<any>) { }

  openMemberProfileModal() {
    this.memberProfileRef = this.ngbModal.open(MemberProfileModalComponent, {
      size: 'lg',
    });
    return this.memberProfileRef.result
  }

  closeMemberProfileModal() {
    return this.memberProfileRef && this.memberProfileRef.close();
  }

  openMemberProfileEditModal(eid?) {
    this.memberProfileEditRef = this.ngbModal.open(MemberProfileEditModalComponent, {
      size: 'lg',
      windowClass: 'modal-large'
    });
    if (eid) {
      this.memberProfileEditRef.componentInstance.eid = eid;
    }
    return fromPromise(this.memberProfileEditRef.result)
  }

  closeMemberProfileEditModal() {
    this.memberProfileEditRef.close();
    return this.memberProfileEditRef;
  }
}
