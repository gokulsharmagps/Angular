import { Component, OnInit } from '@angular/core';
import {UserComponent} from '../user.component';
import {Router} from '@angular/router';
import {LoginService} from '../user-login.service';
import {Citizen} from './signup';

@Component({
  selector: 'user-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

citizen :{first_name:string,last_name:string,email:string,mobile:string,aadhar_no:string,password:string,password_confirmation:string}={
  first_name :"",
  last_name :"",
  email:"",
  mobile:"",
  aadhar_no:"",
  password:"",
  password_confirmation:""
};
  constructor(private router :Router,private loginService:LoginService ) { }

  ngOnInit() {
  }


  openlogin(){
    window.alert("clicking");
    this.router.navigate(['/user/login']);

  }

  openCommercial(){
    this.router.navigate(['/commercial']);
  }


  doSignup() {
    //window.alert("entered");

    //window.alert(this.citizen.first_name);
    var data ={
      citizen :this.citizen

    }
    this.loginService.signup(data).subscribe((resp) => {
      //this.navCtrl.push(MainPage);
      //window.alert("sucess from doSignup");
      //this.router.navigate(['/admin']);
    }, (err) => {
      //window.alert("error from doSignup");
      //console.log(err);
      // this.navCtrl.push(MainPage);
      // // Unable to log in
      // let toast = this.toastCtrl.create({
      //   message: this.loginErrorString,
      //   duration: 3000,
      //   position: 'top'
      //});
    //  toast.present();
    });
  }
 }
