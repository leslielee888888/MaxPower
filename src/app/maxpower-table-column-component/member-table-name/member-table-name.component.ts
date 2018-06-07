import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Store } from '@ngrx/store';
import { OPEN_MEMBER_PROFILE_MODAL, OPEN_MEMBER_PROFILE_EDIT_MODAL } from '../../maxpower-reducer/reducers/modal-reducer';

@Component({
  selector: 'app-member-table-name',
  templateUrl: './member-table-name.component.html',
  styleUrls: ['./member-table-name.component.scss']
})
export class MemberTableNameComponent implements ViewCell, OnInit {

  renderValue: string | number;
  value: string | number;
  rowData: any;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.renderValue = this.rowData.contact_person;
  }

  openProfile() {
    /* this.modalRef =  this.modal.open(MemberProfileModalComponent, {
      size: 'lg'
    });
    this.modalRef.componentInstance.member = this.rowData; */
    //window.open('./pages/Member-profile/'+this.rowData.id);
    this.store.dispatch({
      type: OPEN_MEMBER_PROFILE_EDIT_MODAL, payload: {
        eid: this.value
      }
    });
  }
}
