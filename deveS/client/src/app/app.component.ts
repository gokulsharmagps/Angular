import { Component,OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(private userService:UserService){}
introtab=true;
personaltab=false;
showalltab=false;

user :User =new User();


users:User[];

ngOnInit(){


}

getUserss(){
  this.userService.getUsers().subscribe(response => {
    this.users = response.json();
    console.log(this.users);

  }, error => {
    console.log(error);
});
}

showintro(){
  this.introtab=true;
  this.personaltab=false;
  this.showalltab=false;

}

showpersonaltab(){

if(this.user.name.length!=0 && this.user.about.length!=0){
  this.introtab=false;
  this.personaltab=true;
}
else{
  window.alert("Enter the fields");
}

}

showall(){
  this.postDetails();
  //console.log(this.user);
  this.getUserss();
  
  this.introtab=false;
  this.personaltab=false;
  this.showalltab=true;
}


postDetails(){
  this.userService.postUserDetails(this.user).subscribe(response => {
    console.log("SUCESS");
    console.log(this.user);

  }, error => {
    console.log(error);
});
}



}
