import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import {User} from './user';
import {MENU} from './menu';

@Injectable()
export class MenuService {
  constructor(private http:Http){}


    getMenus(){
      return this.http.get('https://thesmartq.firebaseio.com/menu.json');


      }


}
