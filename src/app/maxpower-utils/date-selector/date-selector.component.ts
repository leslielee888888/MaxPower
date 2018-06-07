import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatePickerComponent } from '../custom-date-picker/custom-date-picker.component';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {
  @Input() defaultSelect: number = 0;
  @Output() onChange = new EventEmitter<any>();
  select: any;
  selectOptions: any[];
  constructor(private ngbModal: NgbModal) {
    this.selectOptions = [
      {
        label: "ALL",
        startDate: '2000-01-01',
        endDate: moment().format('YYYY-MM-DD')
      },
      {
        label: `Today: ${moment().format('DD-MM-YYYY')}`,
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }, {
        label: `Yesterday: ${moment().add(-1, 'd').format('DD-MM-YYYY')}`,
        startDate: moment().add(-1, 'd').format('YYYY-MM-DD'),
        endDate: moment().add(-1, 'd').format('YYYY-MM-DD')
      }, {
        label: `Last 30 days: ${moment().add(-30, 'd').format('DD-MM-YYYY')} ~ ${moment().format('DD-MM-YYYY')}`,
        startDate: moment().add(-30, 'd').format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }, {
        // tslint:disable-next-line:max-line-length
        label: `Last month: ${moment(`${moment().format('YYYY-MM-')}01`).add(-1, 'M').format('DD-MM-YYYY')} ~ ${moment().add(-1, 'M').endOf('month').format('DD-MM-YYYY')}`,
        startDate: moment(`${moment().format('YYYY-MM-')}01`).add(-1, 'M').format('YYYY-MM-DD'),
        endDate: moment().add(-1, 'M').format('YYYY-MM-DD')
      }, {
        // tslint:disable-next-line:max-line-length
        label: `2 month ago: ${moment(`${moment().format('YYYY-MM-')}01`).add(-2, 'M').format('DD-MM-YYYY')} ~ ${moment().add(-1, 'M').endOf('month').format('DD-MM-YYYY')}`,
        startDate: moment(`${moment().format('YYYY-MM-')}01`).add(-2, 'M').format('YYYY-MM-DD'),
        endDate: moment().add(-2, 'M').format('YYYY-MM-DD')
      }, {
        label: 'Custom Date'
      }
    ].map((v: any, i) => ({ ...v, type: v.label === 'Custom Date' ? 'datapick' : 'normal' }));
    
  }

  ngOnInit() {
    this.select = this.selectOptions[this.defaultSelect];
  }

  onSelect(query) {
    if (query.type === 'normal') {
      /* this.store.dispatch({
        type: DASHBOARD_QUERY, payload: {
          ...this.select
        }
      }) */
      this.onChange.emit(this.select);
    } else if (query.type === 'datapick') {
      const modalRef = this.ngbModal.open(CustomDatePickerComponent)
        .result.then(date => {
          if (date === 'close') { return; }
          this.onChange.emit(date);
          /* this.store.dispatch({
            type: DASHBOARD_QUERY, payload: {
              ...date
            }
          }) */
        })
    }
  }
}
