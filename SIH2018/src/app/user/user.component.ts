import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
import {Login} from'./user-login';
import {LoginService} from './user-login.service';
import {FormsModule} from '@angular/forms';
import{UsersService} from'./user-details/user.service';
import {User} from './user-details/user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginformvisible =true;
  signupformvisible = false;
  authentic : boolean;
  name:string;
  lname:string;
  Phonenumber :string;
  Anumber :number;
  loginpassword :string;
  cpassword:string;
  login : Login;
  private sub :any;
  private actualnumber :number;
  private actualpassword :string;
  private user:User;
//private logins:Login[];

    constructor(private router :Router,private loginService:LoginService,private userService:UsersService) {


     }

    ngOnInit() {
      // this.loginService.getLogins()
      //     .subscribe(logins => this.logins = logins);

    }

  openloginform(){
    this.loginformvisible=true;
    this.signupformvisible=false;
  }

  opensignupform(){
    window.alert("clickd");
    this.router.navigate(['/user/signup']);
  }

  checkAuthentication() {

    //window.alert("entered authentication function");
    window.alert("loggin in !Click ok!");
      this.loginService.getLogin(this.Phonenumber).then(login => this.login = login);
      setTimeout(() => {



      //window.alert(this.login.name);
      if(this.login==null){
        //window.alert("null");
      }
  else{//window.alert("not null");

  }
  //window.alert(this.login.phoneNumber +" retrived "+this.login.password+"  "+this.login.type);
  //window.alert("retrived")
  //window.alert("entering if condition");

      if(this.login.phoneNumber==this.Phonenumber && this.login.password==this.loginpassword){
        //window.alert("inside if");


        if(this.login.type=="private"){
          window.alert("successfully Logged In");

          this.loginService.transferContent(this.Phonenumber);
          this.router.navigate(['/user/userdetails']);
        //window.alert("ended");

      }
      else if(this.login.type=="commercial"){
        window.alert("CommercialComponent");
        //window.alert(this.login.firmnumber);
        this.userService.getUser(this.Phonenumber).then(user => this.user = user);
        this.router.navigate(['commercial','commercialdetails']);
        //this.loginService.transferContent(this.Phonenumber);
        setTimeout(() => {
                window.alert(this.user.firmnumber);
            }, 2000);


        // this.loginService.transferContent(this.user.firmnumber);
        // this.router.navigate(['/commercial/commercialdetails']);

      }
      else if(this.login.type=="government"){
        window.alert("GOVERNMENTComponent");
        //window.alert(this.login.firmnumber);
        this.userService.getUser(this.Phonenumber).then(user => this.user = user);
        this.router.navigate(['commercial','commercialdetails']);
        //this.loginService.transferContent(this.Phonenumber);
        setTimeout(() => {
                window.alert(this.user.firmnumber);
            }, 0);


        // this.loginService.transferContent(this.user.firmnumber);
        // this.router.navigate(['/commercial/commercialdetails']);

      }


      }
      this.Phonenumber="";
      this.loginpassword="";
}, 5000);

  }

    // registerUser(event){
    //   event.preventDefault();
    //   var newUser= {
    //     name:this.name,
    //     lname:this.lname,
    //     mail:this.mail,
    //     Pnumber:this.Pnumber,
    //     Anumber:this.Anumber,
    //     password:this.password
    //
    //   }
    //   this.LoginService.addUser(newUser)
    // .subscribe(User => this.users.push(user));
    //
    //   }
    }
