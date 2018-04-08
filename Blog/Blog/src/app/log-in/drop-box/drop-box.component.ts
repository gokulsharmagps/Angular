import { Component} from '@angular/core';
import {PostService} from '../../posts/post.service';
import {Post} from '../../posts/post';

@Component({
  selector: 'app-drop-box',
  templateUrl: './drop-box.component.html',
  styleUrls: ['./drop-box.component.css']
})
export class DropBoxComponent{
addformvisible=false;
posts:Post[];
  constructor(private postService:PostService) {

   }

  ngOnInit() {
      this.postService.getPosts().subscribe(posts => this.posts = posts)
    }

openaddform(){
  this.addformvisible=true;
}
closeaddform(){
  this.addformvisible=false;
}
}
