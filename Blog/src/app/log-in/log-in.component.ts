import { Component} from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
logins: Login[];
enteruser :string;
enterpass :string;
state :boolean = false;

constructor(private loginService: LoginService) {}

ngOnInit() {
  this.loginService.getLogins()
      .subscribe(data => this.logins = data);
      // this.check();

      }

      check(){
        for(let login of this.logins){
          if(login.state=true){
            this.state=true;
          }
          else {
            this.state=false;
          }
        }
      }

basicAlert(){
  alert("Workingbutton");
}


validation(){
          alert("Entered Method");
          for(let login of this.logins){
            alert("looping");
            if(login.username==this.enteruser && login.password==this.enterpass){
              login.state=true;
            }
            else{
              alert("Incorrect");
            }
          }
        }
}
