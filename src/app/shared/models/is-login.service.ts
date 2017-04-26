import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class IsLoginService {

  isLogin$ = new Subject<boolean>();

  // changeEmitted$ = this.isLogin.asObservable();
  constructor() { }

  getStatus() {
    // console.log(this.isLogin$);
    return this.isLogin$;
  }

  updateStatus(status: boolean) {
    this.isLogin$.next(status);
    // console.log(this.isLogin$);
  }

}
