import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
// import {CookieService} from 'angular2-cookie/core';
// import {map} from 'rxjs/operator/map';
declare const jQuery: any;
// import $ from 'jquery';

const BASE_URL = 'http://127.0.0.1:8000';
  // 'http://127.0.0.1:8000';
// 'http://192.168.1.36:8000';

@Injectable()
export class AsyncService {

  headers = new Headers;
  options = new RequestOptions({
    headers: this.headers,
    withCredentials: true
  });

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
    return this.http.get(`${BASE_URL}/parties`, this.options)
      .map((res: Response) => res.json())
      .map((data) => (data['parties']))
      .map((data) => {
       console.log(data);
      return data;
      })
      .catch(this.handleError);

  }

  getPartyDetail(id: number) {
    return this.http.get(`${BASE_URL}/party${id}`, this.options)
      .map((res: Response) => res.json())
      .map((data) => {
      // console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  getFriends() {
    return this.http.get(`${BASE_URL}/friends`, this.options)
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

    // const headers = new Headers({
    //   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   // 'XSRF-TOKEN': this.getCookie('csrftoken'),
    // });
    // const options = new RequestOptions({
    //   headers: headers,
    //   withCredentials: true
    // });
    return this.http.post(`${BASE_URL}/login/`, data, this.options);
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

  getLogin() {
    return this.http.get(`${BASE_URL}/login/`, this.options)
      .map((res: Response) => {
        const tmp = res.text().split('\'');
        console.log(tmp[5]);
        return tmp[5];
      });
  }


}
