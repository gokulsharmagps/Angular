import { Component ,OnInit} from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { Login } from '../log-in/login';
import { LoginService } from '../log-in/login.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls:['./posts.component.css']
})

export class PostsComponent implements OnInit{
  posts: Post[];
  logins: Login[];
  state :boolean = false;

  constructor(private postService:PostService,private loginService: LoginService) {
    this.postService.getPosts()
        .subscribe(posts => this.posts = posts);
   }

    ngOnInit() {
    this.postService.getPosts()
        .subscribe(posts => this.posts = posts);
        this.loginService.getLogins()
            .subscribe(data => this.logins = data);
          //  this.check();
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
