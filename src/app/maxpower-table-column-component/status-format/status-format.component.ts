import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-format',
  templateUrl: './status-format.component.html',
  styleUrls: ['./status-format.component.scss']
})
export class StatusFormatComponent implements OnInit {
  renderValue: string | number;
  value: string | number;
  rowData: any;
  constructor() { }

  ngOnInit() {
    this.renderValue = this.value === 1 ? 'Pending' : 'Decline'
  }

}
