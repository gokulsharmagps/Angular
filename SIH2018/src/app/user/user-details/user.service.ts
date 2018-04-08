//import {PComponent} from './posts.component';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {User} from './user';
//import {Challan} from '../../admin/admin-details/challan';

@Injectable()
export class UsersService{
  constructor(private http:Http){}

    getUsers(){
      return this.http.get
      ('assets/users.json').map(response=> <User[]> response.json().usersData);


  }

  getUser(phone :string) {
      return this.getUsers().toPromise()
                 .then(users => users.filter(user => user.phoneNumber === phone)[0]);

}

  }
