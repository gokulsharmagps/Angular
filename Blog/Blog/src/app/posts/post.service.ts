import {PostsComponent} from './posts.component';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Post} from './post';

@Injectable()
export class PostService{
  constructor(private http:Http){}

    getPosts(){
      return this.http.get
      ('http://localhost:3000/api/posts/').map(response=> <Post[]> response.json().postsData);


  }

  getPost(id: number) {
      return this.getPosts().toPromise()
                 .then(posts => posts.filter(post => post.id === id)[0]);

}

  }
