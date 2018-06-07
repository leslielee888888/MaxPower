import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import * as moment from 'moment';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.scss']
})
export class DateFormatComponent implements ViewCell, OnInit {

  renderValue: string | number;
  value: string | number;
  rowData: any;
  constructor() { }

  ngOnInit() {
    this.renderValue = this.value && moment(this.value).format('DD-MMM-YYYY');
  }

}
