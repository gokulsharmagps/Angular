import {LogInComponent} from './log-in.component';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Login} from './login';

@Injectable()
export class LoginService{
  constructor(private http:Http){}

    getLogins(){
      return this.http.get
      ('assets/login.json').map(response=> <Login[]> response.json().loginData);


  }

  }
