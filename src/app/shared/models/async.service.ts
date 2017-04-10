import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
// import {map} from 'rxjs/operator/map';

const BASE_URL = 'http://192.168.1.36:8000';

@Injectable()
export class AsyncService {

  constructor(private http: Http) { }

  getParties() {
    return this.http.get(`${BASE_URL}/parties`)
      .map((res: Response) => res.json())
      .map((data) => (data['parties']))
      .map((data) => {
      return data;
      });

  }

  getPartyDetail(id: number) {
    return this.http.get(`${BASE_URL}/party${id}`)
      .map((res: Response) => res.json())
      .map((data) => {
      // console.log(data);
        return data;
      });
  }

  getFriends() {
    return this.http.get(`${BASE_URL}/friends`)
      .map((res: Response) => res.json())
      .map((data) => (data['friends']))
      .map((data) => {
      console.log(data);
        return data;
      });
  }

}
