import { Injectable } from '@angular/core';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class FindFriendsService {

  constructor() { }



  searchFunction() {
    const inputElt = document.getElementById('search');
    const start$ = Observable.fromEvent(inputElt, 'input')
      .map((evt) => {
      // console.log(evt['target'].value);
      return evt['target'].value;
      })
      .debounceTime(300)
      .distinctUntilChanged()
      .filter(val => val.length > 1);
    return start$;
  }

}
