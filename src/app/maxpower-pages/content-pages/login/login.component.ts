import swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../service/http.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { LOGIN } from '../../../maxpower-reducer/reducers/login-reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  user = {
    username:null,
    password:null
  }
  constructor(private router: Router, private location: Location, private store: Store<any>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user)
    this.store.dispatch({ type: LOGIN, payload: { 
      ...this.user
    }})
  }

  onForgotPassword() {
    swal({
      type: "info",
      title: 'FORGOTTEN YOUR PASSWORD?',
      text: 'Please email us your username and registered email address and we\'ll send you the password shortly.',
    })
  }

  onRegister() {
    window.location.href = 'https://www.maxfunding.com.au/partner/#openDialogue';
  }

}
