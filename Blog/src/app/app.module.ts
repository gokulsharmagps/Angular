import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './posts/post.service';
import { HomePostComponent } from './home-post/home-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PostsComponent,

    PostComponent,
    PostDetailComponent,
    HomePostComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {path:'',redirectTo:'home',pathMatch :'full'},
    {path :'home', component:HomeComponent},
    {path : 'posts', component: PostsComponent},
    {path :'contact', component:ContactComponent},
    {path : 'about', component: AboutComponent},
    {path :'posts/:id' ,component :PostDetailComponent}
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
