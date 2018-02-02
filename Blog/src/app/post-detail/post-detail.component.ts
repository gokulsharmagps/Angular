import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from'@angular/router';
import { PostService } from '../posts/post.service';
import {Post} from '../posts/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
private postId;
posts: Post[];
  constructor(  private route :ActivatedRoute,private postService:PostService) { }


  ngOnInit() {
  this.route.params.forEach((params:Params)=>this.postId=params['id']);
  this.postService.getPosts()
      .subscribe(posts => this.posts = posts);


  }

  showContent(enteredpost){
  for(let post of this.posts){
  if(post.id==enteredpost.id){
    return post;
  }

  }
}
}
