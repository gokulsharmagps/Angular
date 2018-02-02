import { Component} from '@angular/core';
import { Login } from '../log-in/login';
import { LoginService } from '../log-in/login.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
