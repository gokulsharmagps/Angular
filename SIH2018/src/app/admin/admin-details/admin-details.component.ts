import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import {UsersService} from '../../user/user-details/user.service';
//import {User} from '../../user/user-details/user';
import {AdminComponent} from '../admin.component';
import {Challan} from './challan';
import {ChallanService} from './challan.service';

@Component({
  selector: 'admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
signupformvisible = false;
loggedin=false;
//users:User[];
challans:Challan[];

  constructor(private challanService:ChallanService) {


     }

  ngOnInit() {
    this.challanService.getChallans()
         .subscribe(challans => this.challans = challans);
        console.log(this.challans)
    //this.loggedin=this.adminComponent.returnState();

  }

  opensignupform(){
    this.signupformvisible=true;
  }



}
