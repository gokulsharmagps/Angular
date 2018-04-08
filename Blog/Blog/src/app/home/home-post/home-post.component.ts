import { Component, OnInit,Input } from '@angular/core';
import {PostsComponent} from '../../posts/posts.component';
import {HomeComponent} from '../home.component';

@Component({
  selector: 'home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.css']
})
export class HomePostComponent implements OnInit {

@Input() post;

  constructor(private homeComponent :HomeComponent) { }

  ngOnInit() {
  }


    //
    // traverse(){
    // this.postDetailComponent.showContent(this.post);
    // }

}
