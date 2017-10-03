import { Component } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls:['./posts.component.css']
})

export class PostsComponent {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
        .subscribe(data => this.posts = data);
  }


}
