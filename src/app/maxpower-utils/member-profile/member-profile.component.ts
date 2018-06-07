import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaxpowerMemberTableSettings } from '../../config/table.setting';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, ActivatedRoute, ParamMap, RouterState, Router } from '@angular/router';
import { switchMap, mapTo, timeout, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { MEMBER_PROFILE_QUERY, MEMBER_PROFILE_SUBMIT, MEMBER_PROFILE_ADD_SUBMIT, MEMBER_PROFILE_AUTO_SAVE, MEMBER_PROFILE_FORM_RESET } from '../../maxpower-reducer/reducers/member-profile-reducer';
import { Observable, of, interval, fromEvent, from, timer } from 'rxjs';
import { CLOSE_MEMBER_PROFILE_MODAL } from '../../maxpower-reducer/reducers/modal-reducer';
import { MEMBER_PENDING_QUERY, MEMBER_QUERY } from '../../maxpower-reducer/reducers/member-reducer';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { EARNINGS_PENDING_QUERY, EARNINGS_RECEIVE_QUERY } from '../../maxpower-reducer/reducers/earnings-reducer';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit {
  routeUrl: string;
  autosave: any;
  @Input() isEditModule: boolean = false;
  @Input() eid: any;
  canEdit: boolean = false;
  member$: Observable<any>;
  private member = {
    company_name: '',
    contact_number: '',
    contact_person: '',
    email: '',
    other_phone: '',
    website: '',
    nature: '',
    ABN: ''
  };
  // dataSource: { "id": string; "company_name": string; "contact_person": string; "contact_number": string; "other_phone": any; "email": string; "website": string; "nature": string; }[];
  memberForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private store: Store<any>) {
    this.memberForm = this.fb.group({
      company_name: new FormControl('', Validators.required),
      contact_person: new FormControl('', Validators.required),
      contact_number: new FormControl('', [Validators.required, Validators.pattern(/^(\d{4} ?\d{3} ?\d{3}|\d{2} ?\d{4} ?\d{4}|\d{4} ?\d{4})?$/)]),
      other_phone: new FormControl('', [Validators.pattern(/^(\d{4} ?\d{3} ?\d{3}|\d{2} ?\d{4} ?\d{4}|\d{4} ?\d{4})?$/)]),
      email: new FormControl('', [Validators.email, Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      website: new FormControl(''),
      nature: new FormControl('', Validators.required),
      ABN: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]{3} ?[0-9]{3} ?[0-9]{3}|[0-9]{2} ?[0-9]{3} ?[0-9]{3} ?[0-9]{3})$/)])
    });
    this.store.pipe(select('member'), select('profile')).subscribe(r => {
      this.member = r;
      this.memberForm.patchValue({
        ABN: this.member.ABN
      })
    });
    this.store.pipe(select('member'), select('autosave')).subscribe(r => {
      this.autosave = r;
    })
    if (!this.isEditModule) {
      this.store.dispatch({ type: MEMBER_PROFILE_FORM_RESET });
    }
    this.routeUrl = this.route.url;
    console.log(this.route);
  }
  onChange() {
    if (this.isEditModule && this.memberForm.valid) {
      this.store.dispatch({
        type: MEMBER_PROFILE_AUTO_SAVE,
        payload: {
          member: this.member,
          callback: (r) => {
            if (this.routeUrl.indexOf('Earnings') >= 0) {
              this.store.dispatch({ type: EARNINGS_PENDING_QUERY })
              this.store.dispatch({ type: EARNINGS_RECEIVE_QUERY })
            }else{
              this.store.dispatch({ type: MEMBER_QUERY })
            }
          }
        }
      })
    }
  }

  openEdit() {
    this.canEdit = !this.canEdit;
  }

  ngOnInit() {
    if (this.eid) {
      this.store.dispatch({
        type: MEMBER_PROFILE_QUERY, payload: {
          eid: this.eid
        }
      })
    } else {
      this.canEdit = true;
    }
  }
  onSubmit() {
    console.log(!this.memberForm.valid, !this.memberForm.dirty)
    if (!this.memberForm.valid || !this.memberForm.dirty) {
      Object.keys(this.memberForm.controls).map(r => {
        this.memberForm.controls[r].markAsDirty();
        this.memberForm.controls[r].markAsTouched();
        this.memberForm.controls[r].updateValueAndValidity();
      })
      return;
    }
    console.log(this.member);
    this.store.dispatch({
      type: this.eid ? MEMBER_PROFILE_SUBMIT : MEMBER_PROFILE_ADD_SUBMIT, payload: {
        member: this.member,
        callback: () => {
          this.memberForm.reset();
          this.store.dispatch({ type: CLOSE_MEMBER_PROFILE_MODAL });
          this.store.dispatch({ type: MEMBER_PENDING_QUERY });
        }
      }
    })
  }
}
