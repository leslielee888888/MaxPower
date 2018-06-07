import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-currency-format',
  templateUrl: './currency-format.component.html',
  styleUrls: ['./currency-format.component.scss']
})
export class CurrencyFormatComponent implements ViewCell, OnInit {
  
  renderValue: string | number;
  value: string | number;
  rowData: any;
  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

}
