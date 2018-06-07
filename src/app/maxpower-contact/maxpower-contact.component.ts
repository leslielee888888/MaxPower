import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-referral-contact',
  templateUrl: './maxpower-contact.component.html',
  styleUrls: ['./maxpower-contact.component.scss']
})
export class MaxpowerContactComponent implements OnInit {

  txtQuery: any;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    this.contactForm = this.fb.group({
      txtQuery: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(1);
   /*  this.referralContactService.doContactUs(this.txtQuery)
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.trim() == "Success") {
          this.toastsManager.success('Save success', 'Message');
        } else {
          this.toastsManager.error('Save fail', 'Message');
        }
      }); */
  }

}
