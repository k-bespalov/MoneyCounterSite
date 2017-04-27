import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs';

const BASE_URL = 'http://127.0.0.1:8000';
  // 'http://127.0.0.1:8000';
// 'http://192.168.1.36:8000';

@Injectable()
export class AsyncService {

  headers = new Headers;
  // ({
  //   'Content-Type': 'application/x-www-form-urlencoded',
  // });
  options = new RequestOptions({
    headers: this.headers,
    withCredentials: true
  });

  public token: string;

  constructor(
    private http: Http,
  ) { }

  getParties() {
    return this.http.get(`${BASE_URL}/parties`, this.options)
      .map((res: Response) => res.json())
      .map((data) => (data['parties']))
      .map((data) => {
       // console.log(data);
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

  getPayments() {
    return this.http.get(`${BASE_URL}/payments`, this.options)
      .map((res: Response) => res.json())
      .map((data) => (data['payments']))
      .map((data) => {
        // console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  getPartyVariants() {
    return this.http.get(`${BASE_URL}/payment/add`, this.options)
      .map((res: Response) => res.json())
      .map((data) => (data['parties']))
      .map((data) => {
        return data;
      })
      .catch(this.handleError);
  }

  // getMyProfileId() {
  //   return this.http.get(`${BASE_URL}/profile_id`, this.options)
  //     .map((res: Response) => res.json())
  //     .map((data) => (data['id']))
  //     .map((data) => {
  //       console.log(data);
  //       return data;
  //     })
  //     .catch(this.handleError);
  // }
  //
  getProfile(id: number) {
    return this.http.get(`${BASE_URL}/id/${id}`, this.options)
      .map((res: Response) => res.json())
      .map((data) => {
        // console.log(data);
        return data;
      })
      .catch(this.handleError);
  }
  //
  // getMyProfilePage() {
  //  return this.getMyProfileId().concatMap((data1) => {
  //     return this.getProfile(data1)
  //       .catch(this.handleError);
  //   });
  // }

  getMyProfile() {
    return this.http.get(`${BASE_URL}/profile_id`, this.options)
        .map((res: Response) => res.json())
        .map((data) => (data['id']))
        .map((data) => {
          console.log(data);
          return data;
        });
     //    })
     //    .flatMap((id) => this.http.get(`${BASE_URL}/id/${id}`, this.options))
     //    .map((res: Response) => {
     //  console.log(res);
     // return res.json(); })
     //    .map((data) => {
     //      console.log(data);
     //      return data;
     //    });
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

  getPartyParticipants() {
    return this.http.get(`${BASE_URL}/party/add`, this.options)
      .map((res: Response) => res.json())
      .map((data) => (data['friends']))
      .map((data) => {
        // console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  getRepaymentsToMe() {
    return this.http.get(`${BASE_URL}/to_me_repayments`, this.options)
      .map((res: Response) => res.json())
      .map((data) => (data['to_me']))
      .map((data) => {
        // console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  getRepaymentsFromMe() {
    return this.http.get(`${BASE_URL}/from_me_repayments`, this.options)
      .map((res: Response) => res.json())
      .map((data) => (data['from_me']))
      .map((data) => {
        // console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  setPayed(id: number) {
    const obj = { 'id': id };
    return this.http.post(`${BASE_URL}/set_payed`, JSON.stringify(obj), this.options);
  }

  changeFriendStatus(id: number) {
    const obj = { 'id': id };
    return this.http.post(`${BASE_URL}/change_friend_status`, JSON.stringify(obj), this.options);
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

  postParty(data) {
    return this.http.post(`${BASE_URL}/party/add`, data, this.options);
  }

  postPayment(data) {
    return this.http.post(`${BASE_URL}/payment/add`, data, this.options);
  }

  getPayersList(id: number) {
    return this.http.post(`${BASE_URL}/get/payers`, id, this.options)
      .map((res: Response) => res.json())
      .map((data) => (data['payers']))
      .map((data) => {
        return data;
      })
      .catch(this.handleError);
  }


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
        // console.log(tmp[5]);
        return tmp[5];
      });
  }


}
