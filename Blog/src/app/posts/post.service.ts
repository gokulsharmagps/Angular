import {PostsComponent} from './posts.component';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Post} from './post';

@Injectable()
export class PostService{
  constructor(private http:Http){}

    getPosts(){
      return this.http.get
      ('assets/post.json').map(response=> <Post[]> response.json().postsData);


  }

  }
