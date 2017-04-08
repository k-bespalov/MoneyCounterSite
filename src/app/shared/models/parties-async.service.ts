import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
// import {map} from 'rxjs/operator/map';

// const BASE_URL = 'http://127.0.0.1:8000/parties';

@Injectable()
export class PartiesAsyncService {

  constructor(private http: Http) { }

  getParties() {
    return this.http.get('http://192.168.1.36:8000/parties')
      .map((res: Response) => res.json())
      .map((data) => (data['parties']))
      .map((data) => {
      console.log(data);
      return data;
      });

  }

}
