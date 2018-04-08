import { Component, OnInit,Input } from '@angular/core';
import {CarsService} from '../commercial-cars.service';
import {Car} from '../commercial-cars';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'commercial-cars',
  templateUrl: './commercial-cars.component.html',
  styleUrls: ['./commercial-cars.component.css']
})
export class CommercialCarsComponent implements OnInit {
  @Input() cars: Car[];

      type:string;
      Vnumber :string;
      Pnumber:string;
      name:string;
      date:string;
      time:string;
      email:string;
      Dlnumber:string;
      firmnumber:string;

      constructor(){
        // this.carService.getCars()
        //     .subscribe(cars => {
        //         this.cars = cars;
        //     });
      }
ngOnInit(){

}
      // addCar(event){
      //     event.preventDefault();
      //     var newCar = {
      //         title: this.title,
      //         isDone: false
      //     }
      //
      //     this.carService.addcar(newCar)
      //         .subscribe(car => {
      //             this.cars.push(car);
      //             this.title = '';
      //         });
      // }
      //
      // deleteCar(id){
      //     var cars = this.cars;
      //
      //     this.carService.deleteCar(id).subscribe(data => {
      //         if(data.n == 1){
      //             for(var i = 0;i < cars.length;i++){
      //                 if(cars[i]._id == id){
      //                     cars.splice(i, 1);
      //                 }
      //             }
      //         }
      //     });
      // }
      //
      // updateStatus(car){
      //     var _car = {
      //         _id:car._id,
      //         title: car.title,
      //         isDone: !car.isDone
      //     };
      //
      //     this.carService.updateStatus(_car).subscribe(data => {
      //         car.isDone = !car.isDone;
      //     });
      // }
  }
