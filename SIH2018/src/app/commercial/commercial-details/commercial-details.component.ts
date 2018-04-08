import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import {Car} from './commercial-cars';
import {CarsService} from './commercial-cars.service';
import {LoginService} from '../../user/user-login.service';

@Component({
  selector: 'commercial-details',
  templateUrl: './commercial-details.component.html',
  styleUrls: ['./commercial-details.component.css']
})
export class CommercialDetailsComponent implements OnInit {

addcars = false;
cars: Car[];
    //title: string;
    firmnumber :string ;
    //user:User;


     constructor(private loginService :LoginService,private carService:CarsService) {
       this.loginService.currrentMessage.subscribe(number =>this.firmnumber =number);
      // this.carService.getCar(this.firm_number).then(car => this.cars = car);
      this.carService.getCars()
          .subscribe(cars => this.cars = cars);

     }

    ngOnInit(){

      //window.alert(firm_number);
    }

  addCarsfunction(){
    this.addcars=true;
  }

  showtables(){
    this.addcars=false;
  }

}
