import { Directive, Input, HostListener, OnInit, EventEmitter, Output, Host, SimpleChanges, ViewContainerRef } from '@angular/core';
import { FormControl, Validators, AsyncValidatorFn, ValidatorFn, NgControl, NgModel } from '@angular/forms';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Directive({
  selector: '[appFormatter]',
  providers: [CurrencyPipe, UpperCasePipe]
})
export class FormatterDirective implements OnInit {
  hasChange = false;
  INIT = true;
  fomatter: any;
  @Input() appFormatter: any;
  @Input() formatFn: any;
  @Input() ngModel: any;
  ngControl: NgControl;
  FOMATTER_MAP = [
    {
      name: 'phone',
      fomatter: (val: string) => {
        const value = val.replace(/[^0-9]/, '');
        if (value) {
          if (value.match(/^\b04/)) {
            return value.replace(/^([0-9]{4}) ?([0-9]{3}) ?([0-9]{3}).*$/, '$1 $2 $3');
          } else if (value.match(/^\b0/)) {
            return value.replace(/^([0-9]{2}) ?([0-9]{4}) ?([0-9]{4}).*$/, '$1 $2 $3');
          } else if (value.match(/^[1-9][0-9 ]{7}/)) {
            return value.replace(/^([1-9][0-9]{3}) ?([0-9]{4}).*$/, '$1 $2');
          }
        }
        return value;
      },
      regex: /^(\d{4} \d{3} \d{3}|\d{2} \d{4} \d{4}|\d{4} \d{4})?$/
    },
    {
      name: 'currency',
      fomatter: (value: string) => {
        let rs: any = value && value.replace(/[^0-9]/g, '');
        if (rs && /^[0-9]+$/.test(rs) && this.currencyPipe) {
          rs = this.currencyPipe.transform(rs, ' ', "symbol", "0.0");
          if (rs) {
            return rs.trim();
          }
          else {
            return rs;
          }
        }
      },
      regex: /^[0-9,]{1,}$/
    },
    {
      name: 'name',
      fomatter: (value: string) => {
        const rs = value && value.replace(/[^A-Za-z ]/g, '');
        if (rs && /^[A-Za-z]+$/.test(rs)) {
          return rs.replace(/^([a-z])/, ($1) => $1.toUpperCase());
          // return this.uppercasePipe.transform(rs[0]) + rs.slice(1);
        }
        return rs;
      },
      regex: /^[A-Za-z]{1,}$/
    },
    {
      name: 'fullname',
      fomatter: (value: string) => {
        const rs = value && value.replace(/[^A-Za-z ]/g, '');
        if (rs) {
          return rs.replace(/\b\w/g, function (l) { return l.toUpperCase() });
          // return this.uppercasePipe.transform(rs[0]) + rs.slice(1);
        }
        return rs;
      },
      regex: /^[A-Za-z]{1,}$/
    },
    {
      name: 'abn',
      fomatter: (value: string) => {
        const rs = value.replace(/[^0-9 ]/g, '').trim();
        if (rs) {
          if (/^[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/.test(rs)) {
            return rs.replace(/([0-9]{3}) ?([0-9]{3}) ?([0-9]{3})/, '$1 $2 $3').trim();
          } else {
            return rs.replace(/[ ]/g, '').replace(/([0-9]{2}) ?([0-9]{3}) ?([0-9]{3}) ?([0-9]{3}).*/, '$1 $2 $3 $4').trim();
          }
        }
        return rs;
      },
      regex: /^[0-9 ]+$/
    }
  ]

  constructor(private currencyPipe: CurrencyPipe, private uppercasePipe: UpperCasePipe, @Host() ngControl: NgControl, private ref: ViewContainerRef) {
    this.ngControl = ngControl;
  }

  @HostListener('focus', ['$event']) onFocus(event: any) {
    if (this.ngControl.control)
      this.ngControl.control.markAsPending();
  }

  @HostListener('blur', ['$event']) onBlur(event: any) {
    if (this.hasChange && this.ngControl.control) {
      this.ngControl.control.updateValueAndValidity();
    }
  }

  @HostListener('input', ['$event']) onInput(event: any) {
    if (this.fomatter && this.ngControl.control) {
      const v = this.format(event.target.value);
      this.ngControl.control.patchValue(v);
    };
    // this.ngControl.control.markAsPending();
    this.hasChange = true;
  }


  make_formatter(value: any) {
    return (f: any) => {
      return (fn?: any) => fn ? fn(value) : f(value);
    }
  }

  format(v: any) {
    const fn = this.make_formatter(v)(this.fomatter.fomatter);
    return fn(this.formatFn);
  }

  ngOnInit(): void {
    this.fomatter = this.FOMATTER_MAP.find(r => r.name === this.appFormatter);

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes && this.fomatter && changes.ngModel && changes.ngModel.currentValue && this.INIT) {
      this.ref.element.nativeElement.value = this.format(changes.ngModel.currentValue);
      this.INIT = false;
    }
  }

}
