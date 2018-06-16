
import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs';


@Injectable()
export class UserService{
  constructor(private http:Http){}

headers= new Headers({
  'Content-Type':'application/json',
});

    getUsers(){
      let url="http://localhost:3000/users";
      return this.http.get(url,{headers:this.headers});

  }

  postUserDetails(user:User){
    let url="http://localhost:3000/users";
    return this.http.post(url,user,{headers:this.headers});
  }

  }
