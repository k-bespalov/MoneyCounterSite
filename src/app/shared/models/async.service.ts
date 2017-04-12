import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {CookieService} from 'angular2-cookie/core';
// import {map} from 'rxjs/operator/map';
declare const jQuery: any;

const BASE_URL = 'http://172.20.10.9:8000';
// 'http://192.168.1.36:8000';

@Injectable()
export class AsyncService {

  public token: string;

  constructor(private http: Http
    // , private cookieService: CookieService
  ) { }


  getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  getParties() {
    return this.http.get(`${BASE_URL}/parties`)
      .map((res: Response) => res.json())
      .map((data) => (data['parties']))
      .map((data) => {
      return data;
      })
      .catch(this.handleError);

  }

  getPartyDetail(id: number) {
    return this.http.get(`${BASE_URL}/party${id}`)
      .map((res: Response) => res.json())
      .map((data) => {
      // console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  getFriends() {
    return this.http.get(`${BASE_URL}/friends`)
      .map((res: Response) => res.json())
      .map((data) => (data['friends']))
      .map((data) => {
      // console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  // getToken() {
  //   const token = document.querySelector('meta[property="csrf-token"]')['content'];
  //   console.log(token);
  //   return token;
  // }

  postLogin(data) {
    // // const csrfToken: string = this.cookieService.get('XSRF-TOKEN');
    // // data['csrfmiddlewaretoken'] = csrfToken;
    // const headers = new Headers({ 'Content-Type': 'application/json'});
    // const options = new RequestOptions({ headers: headers });
    // return this.http.post(`${BASE_URL}/login/`, data, options);

    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'XSRF-TOKEN': this.getCookie('csrftoken'),
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.post(`${BASE_URL}/login/`, data, options);
      // .map((response: Response) => {
      //   // login successful if there's a jwt token in the response
      //   const token = response.json() && response.json().token;
      //
      //   if (token) {
      //     // set token property
      //     this.token = token;
      //
      //     // store username and jwt token in local storage to keep user logged in between page refreshes
      //     localStorage.setItem('id_token', token);
      //
      //     // return true to indicate successful login
      //     return true;
      //   } else {
      //     // return false to indicate failed login
      //     return false;
      //   }
      // });

  }


}
