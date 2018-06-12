import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CLOSE_MEMBER_PROFILE_MODAL, CLOSE_MEMBER_PROFILE_EDIT_MODAL } from '../../../maxpower-reducer/reducers/modal-reducer';
import { MEMBER_QUERY } from '../../../maxpower-reducer/reducers/member-reducer';

@Component({
  selector: 'app-member-profile-edit-modal',
  templateUrl: './member-profile-edit-modal.component.html',
  styleUrls: ['./member-profile-edit-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemberProfileEditModalComponent implements OnInit {
  @Input() eid;
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  d(value) {
    //this.ngbActiveModal.close(CLOSE_MEMBER_PROFILE_MODAL);
    this.store.dispatch({
      type: CLOSE_MEMBER_PROFILE_EDIT_MODAL
    });
  }
}
