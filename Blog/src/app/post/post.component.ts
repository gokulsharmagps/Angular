import { Component, OnInit,Input } from '@angular/core';
import {PostsComponent} from '../posts/posts.component';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

@Input() post;
  constructor(private postsComponent:PostsComponent) { }

  ngOnInit() {
  }

 }
