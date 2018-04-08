import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from'@angular/router';
import { PostService } from '../../post.service';
import {Post} from '../../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
private postId;
posts: Post[];
private postp1;
private particularpost;
private post : Post;
private sub :any;
  constructor(  private route :ActivatedRoute,private postService:PostService) {
}


  ngOnInit() {

  //this.route.params.forEach((params:Params)=>this.postp1=params['title']);
  // this.postService.getPosts()
  //     .subscribe(posts => this.posts = posts);
  //this.route.params.forEach((params:Params)=>this.postId=params['id']);
  this.sub =this.route.params.subscribe(params=>{
  let id= +params['id'];

  this.postService.getPost(id).then(post => this.post = post);
    });

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
