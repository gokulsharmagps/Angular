import { Api } from '../providers/api/api';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import {Login} from './user-login';
import {Headers} from '@angular/http';


@Injectable()
export class LoginService{

  private messageSource=new BehaviorSubject<string>("Default message");
  currrentMessage =this.messageSource.asObservable();

  constructor(private http:Http,private api: Api){}



  getLogins(){
    return this.http.get
    ('assets/login.json').map(response=> <Login[]> response.json().logins);


  }


getLogin(phone: string) {
    return this.getLogins().toPromise()
               .then(logins => logins.filter(login => login.phoneNumber === phone)[0]);


}

  transferContent(number:string){
    this.messageSource.next(number);
  }


  signup(accountInfo: any) {
    //console.log(accountInfo);

    // headers.append("X-Citizen-Token");
    // headers.append("X-Citizen-AadharNo");
    let seq = this.api.post('citizen/registrations', accountInfo);
    //seq.map(res=>res.json());
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'SUCCESS') {
        // window.alert("success from loginService");
        // console.log(res.message);
        // console.log(res.data);
        //this._loggedIn(res);
      }
    }, err => {
      //console.error('ERROR', err);
    });

    return seq;
  }

//   let headers = new Headers();
//   //headers.append('Content-Type','application/json');
//   headers.append('Content-Type','application/json');
//   // headers.append("X-Citizen-Token");
//   // headers.append("X-Citizen-AadharNo");
//   let seq = this.api.post('citizen/registration', accountInfo);
//
//   seq.subscribe((res: any) => {
//     // If the API returned a successful response, mark the user as logged in
//     if (res.status == 'success') {
//       this._loggedIn(res);
//     }
//   }, err => {
//     console.error('ERROR', err);
//   });
//
//   return seq;
// }


}
