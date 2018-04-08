import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminDetailsComponent} from './admin-details/admin-details.component';
@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
authentic : boolean;
loggedin=false;
  constructor(private router :Router) { }

  ngOnInit() {
  }


  checkAuthentication() {
    this.authentic=true;
    window.alert("clicking");
    setTimeout(() => {
          this.router.navigate(['admin','admindetails']);
        }, 0);
    this.loggedin=true;
  }



}
