import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { IsbnComponent } from './isbn/isbn.component';
import {ProductService} from './search/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    IsbnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,


    RouterModule.forRoot([
    {path:'',redirectTo:'home',pathMatch :'full'},
    {path :'home', component:HomeComponent},
    {path:'search', component:SearchComponent},
    {path:'search/:id', component:SearchComponent},
    {path:'isbn', component:SearchComponent},
    {path:'isbn/:id',component:IsbnComponent}
    ])
  ],
  providers: [SearchComponent,AppComponent,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
