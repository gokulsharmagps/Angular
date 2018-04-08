import { Component, OnInit,Input } from '@angular/core';
import {HomeComponent} from '../home.component';

@Component({
  selector: 'challan-detail',
  templateUrl: './challan-detail.component.html',
  styleUrls: ['./challan-detail.component.css']
})
export class ChallanDetailComponent implements OnInit {

@Input() number : string ;

  constructor(private homeComponent: HomeComponent) { }

  ngOnInit() {
    //this.challnumber=this.homeComponent.getchallanNumber();
  }

}
