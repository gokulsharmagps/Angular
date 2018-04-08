import { Component} from '@angular/core';
import { Login } from '../log-in/login';
import { LoginService } from '../log-in/login.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
logins: Login[];
state :boolean = false;

  constructor(private loginService: LoginService) {
   }

  ngOnInit() {
    this.loginService.getLogins()
        .subscribe(data => this.logins = data);
        //this.check();
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

}
