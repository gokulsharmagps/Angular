import { Component,OnInit} from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
logins: Login[];
enteruser :string;
enterpass :string;
state :boolean = false;

constructor(private loginService: LoginService,private router:Router) {}

ngOnInit() {
  this.loginService.getLogins()
      .subscribe(data => this.logins = data);
      // this.check();

      }

    checkAuthentication(){
        this.router.navigate(['admin','dropbox']);
    }
  }
