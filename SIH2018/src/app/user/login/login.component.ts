import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
import {Login} from'../user-login';
import {LoginService} from '../user-login.service';
import {FormsModule} from '@angular/forms';
import {UserComponent} from '../user.component';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class UserLoginComponent implements OnInit {


  authentic : boolean;
  name:string;
  lname:string;
  Phonenumber :string;
  Anumber :number;
  loginpassword :string;
  cpassword:string;
  private login : Login;
  private sub :any;
  private actualnumber :number;
  private actualpassword :string;

  constructor(private router :Router ,private loginService:LoginService,private userComponent:UserComponent) { }

  ngOnInit() {
  }

  opensignup(){
    window.alert("opening signup");
    //this.userComponent.opensignupform();
    this.router.navigate(['/user/signup']);
    //this.userComponent.signupform();
  }

  checkAuthentication() {


      this.loginService.getLogin(this.Phonenumber).then(login => this.login = login);
      window.alert(this.login.phoneNumber);
      if(this.login==null){
        window.alert("null");
      }
  else{window.alert("not null");
  }
  window.alert(this.login.phoneNumber +" retrived "+this.login.password);
  //window.alert("retrived")
  window.alert("entering if condition");
      if(this.login.phoneNumber==this.Phonenumber && this.login.password==this.loginpassword){
        //window.alert("inside if");
        this.authentic=true;
        this.loginService.transferContent(this.Phonenumber);
        window.alert("true");
        // this.loggedin=true;
        // this.loggedout=false;
        this.router.navigate(['/user/userdetails']);
      }
      else{
        window.alert("wrong");
      }


  }
}
