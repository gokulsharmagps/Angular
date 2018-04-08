import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent implements OnInit {

challanNumber :string ;
private found :boolean  =false;

  constructor() { }

  ngOnInit() {
  }

search(){
  if(this.found!=true){
    this.found= true;
    window.alert(this.challanNumber);
    return true;
  }
  else  {
    this.found = false;
    window.alert(this.challanNumber);
    return false;
  }
}

getchallanNumber(){
  return this.challanNumber;
}

}
