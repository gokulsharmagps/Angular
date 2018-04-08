import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  checkAuthentication() {
    //this.authentic=true;
    window.alert("clicking");
    setTimeout(() => {
          this.router.navigate(['commercial','commercialdetails']);
        }, 0);
      window.alert("finished");
    //this.loggedin=true;
  }

  openlogin(){
    this.router.navigate(['/user/login']);
  }

openCitizen(){
  this.router.navigate(['/user/signup']);
}

}
