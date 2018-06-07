import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-activity-format',
  templateUrl: './activity-format.component.html',
  styleUrls: ['./activity-format.component.scss']
})
export class ActivityFormatComponent implements ViewCell, OnInit {

  renderValue: string | number;
  value: string | number;
  rowData: any;
  constructor() { }

  ngOnInit() {
    this.renderValue = this.rowData.event + '(' + this.rowData.app_id + ')';
  }


}
