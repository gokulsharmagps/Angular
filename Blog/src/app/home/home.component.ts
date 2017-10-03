import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
posts: Post[];

  constructor(private postService:PostService) { }

  ngOnInit() {
  this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
