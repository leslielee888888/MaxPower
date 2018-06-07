import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-profile-page',
  templateUrl: './member-profile-page.component.html',
  styleUrls: ['./member-profile-page.component.scss']
})
export class MemberProfilePageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
  }

}
