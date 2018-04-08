import { Component, Input } from '@angular/core';
import {PostsComponent} from '../posts.component';
//import {PostDetailComponent} from '../post-detail/post-detail.component';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

@Input() post;

  constructor() { }

  ngOnInit() {
  }

  // traverse(){
  // this.postDetailComponent.showContent(this.post);
  // }
 }
