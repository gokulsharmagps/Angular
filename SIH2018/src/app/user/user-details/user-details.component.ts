import { Component, OnInit } from '@angular/core';
import {LoginService} from'../user-login.service';
import {UsersService} from './user.service';
import {User} from './user';
import {Challan} from '../../admin/admin-details/challan';
import {ChallanService} from '../../admin/admin-details/challan.service';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
// @Input() number : string ;
 number :string ;
 user:User;
 challans : Challan[];

  constructor(private loginService :LoginService,private userService:UsersService ,private challanService:ChallanService) {
  }

  ngOnInit() {

    this.loginService.currrentMessage.subscribe(number =>this.number =number);
    // this.challanService.getChallans()
    //      .subscribe(challans => this.challans = challans);
    // this.challans=this.challans.filter(challan=>{
    //   return challan.phoneNumber.includes(this.number);
    // });
    this.challanService.getChallans().toPromise().then(challans=>challans.filter(challan=>{
      return challan.phoneNumber.includes(this.number);
    })).then(challan=>this.challans=challan);
    this.userService.getUser(this.number).then(user=> this.user=user);



  }

show(){
  window.alert(this.user.name+"  "+this.user.age);
}

}
