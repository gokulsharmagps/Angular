//import {PComponent} from './posts.component';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import {User} from './user';
import {Challan} from './challan';

@Injectable()
export class ChallanService {
  constructor(private http:Http){}

  getChallans(){
    return this.http.get
    ('assets/challan.json').map(response=> <Challan[]> response.json().challansData);


}

  getChallan(phone :string) {
      return this.getChallans().toPromise()
                 .then(challans => challans.filter(challan => challan.phoneNumber === phone)[0]);

}



  }
