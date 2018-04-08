import { Component } from '@angular/core';
import { Post } from '../posts/post';
import { PostService } from '../posts/post.service';
import { Login } from '../log-in/login';
import { LoginService } from '../log-in/login.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
posts: Post[];
logins: Login[];
state :boolean = true;

constructor(private postService:PostService,private loginService: LoginService) {
  }

  ngOnInit() {
  this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
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

  alert(){
    alert("Working");
  }

}
