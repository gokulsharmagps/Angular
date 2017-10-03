import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from'@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
private postId;
  constructor(  private route :ActivatedRoute) { }


  ngOnInit() {
  this.route.params.forEach((params:Params)=>this.postId=params['id']);
  }

}
