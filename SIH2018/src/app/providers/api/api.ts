import { Http,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import {Headers} from '@angular/http';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://192.168.43.82:3000/challans/all';

  constructor(public http: Http) {
  }

  // get(endpoint: string, params?: any ) {
  //   if (!reqOpts) {
  //     reqOpts = {
  //       params: new HttpParams()
  //     };
  //   }
  //
  //   // Support easy query params for GET requests
  //   if (params) {
  //     reqOpts.params = new HttpParams();
  //     for (let k in params) {
  //       reqOpts.params = reqOpts.params.set(k, params[k]);
  //     }
  //   }
  //
  //   return this.http.get(this.url + '/' + endpoint);
  // }

  post(endpoint: string, body: any) {

    var headers = new Headers();
    //headers.append('Content-Type','application/json');
    headers.append('Content-Type','application/json');
    return this.http.post(this.url + '/' + endpoint, JSON.stringify(body),{headers:headers}).map(res=>res.json());
  }

  put(endpoint: string, body: any ) {
    return this.http.put(this.url + '/' + endpoint, body   );
  }

  delete(endpoint: string ,body :any ,header:Headers ) {
    return this.http.delete(this.url + '/' + endpoint);
  }

  patch(endpoint: string, body: any ) {
    return this.http.patch(this.url + '/' + endpoint, body);
  }
}
