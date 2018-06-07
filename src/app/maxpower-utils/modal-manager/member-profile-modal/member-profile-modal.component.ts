import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { CLOSE_MEMBER_PROFILE_MODAL } from '../../../maxpower-reducer/reducers/modal-reducer';
import { MemberProfileComponent } from '../../member-profile/member-profile.component';

@Component({
  selector: 'app-member-profile-modal',
  templateUrl: './member-profile-modal.component.html',
  styleUrls: ['./member-profile-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemberProfileModalComponent implements OnInit {
  //memberForm: any;
  @ViewChild(MemberProfileComponent) memberProfile: MemberProfileComponent;
  constructor(private store: Store<any>, private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
    //console.log(this.memberProfile);
  }

  d() {
    this.ngbActiveModal.dismiss();
    /* this.store.dispatch({
      type: CLOSE_MEMBER_PROFILE_MODAL,
      payload: this.memberProfile.memberForm.reset()
    }); */
  }
}
