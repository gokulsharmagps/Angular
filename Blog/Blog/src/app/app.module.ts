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
import { PostComponent } from './posts/post/post.component';
import { PostDetailComponent } from './posts/post/post-detail/post-detail.component';
import { PostService } from './posts/post.service';
import { HomePostComponent } from './home/home-post/home-post.component';
import { LogInComponent } from './log-in/log-in.component';
import { DropBoxComponent } from './log-in/drop-box/drop-box.component';
import { LoginService } from './log-in/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PostsComponent,

    PostComponent,
    PostDetailComponent,
    HomePostComponent,
    LogInComponent,
    DropBoxComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {path:'',redirectTo:'home',pathMatch :'full'},
    {path :'home', component:HomeComponent},
    {path :'home', outlet:'home-post', component:HomePostComponent},
    {path : 'posts', component: PostsComponent},
    {path : 'posts', outlet:'post', component: PostComponent},
    {path :'contact', component:ContactComponent},
    {path : 'about', component: AboutComponent},
    {path :'admin/dropbox', component:DropBoxComponent},
    {path : 'login', component: LogInComponent},
    {path :'posts/:id' ,component :PostDetailComponent}
    ])
  ],
  providers: [PostService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
