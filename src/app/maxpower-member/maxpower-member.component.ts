import { Component, OnInit } from '@angular/core';
import { MaxpowerMemberTableSettings, MaxpowerPendingMemberTableSettings } from '../config/table.setting';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MEMBER_QUERY, MEMBER_PENDING_QUERY } from '../maxpower-reducer/reducers/member-reducer';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { OPEN_MEMBER_PROFILE_MODAL } from '../maxpower-reducer/reducers/modal-reducer';
@Component({
  selector: 'app-maxpower-member',
  templateUrl: './maxpower-member.component.html',
  styleUrls: ['./maxpower-member.component.scss']
})
export class MaxpowerMemberComponent implements OnInit {
  pendingMembers$: Observable<any>;
  modalRef: NgbModalRef;
  members$: Observable<any>;
  // dataSource: { "id": string; "company_name": string; "contact_person": string; "contact_number": string; "last_login_date": string; "sign_up_date": string; "trackID": string; "total": number; "total_settled": string; "total_deal": string; "commission": number; "submember_no": number; "submember_total": number; "submember_settled": string; "submember_deal": string; "submember_commission": number; }[];
  constructor(private store: Store<any>, private ngbModal: NgbModal) { }
  MaxpowerMemberTableSettings = MaxpowerMemberTableSettings;
  MaxpowerPendingMemberTableSettings = MaxpowerPendingMemberTableSettings;

  ngOnInit() {
    this.members$ = this.store.pipe(select('members'), select('members'));
    this.pendingMembers$ = this.store.pipe(select('members'), select('pendingMembers'));
    this.store.dispatch({ type: MEMBER_QUERY })
    this.store.dispatch({ type: MEMBER_PENDING_QUERY })
  }

  showAddModal() {
    this.store.dispatch({
      type: OPEN_MEMBER_PROFILE_MODAL,
    })
  }
}
