import { Injectable } from '@angular/core';
import swal from 'sweetalert2'
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  submitSuccess(): Observable<any> {
    return fromPromise(swal({
      type: 'success',
      title: 'Message',
      html: 'Submit successful'
    }))
  }
  
  submitError():Observable<any> {
    return fromPromise(swal({
      type: 'error',
      title: 'Message',
      html: 'Submit unsuccessful'
    }))
  }

}
