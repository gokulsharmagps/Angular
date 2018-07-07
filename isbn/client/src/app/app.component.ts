import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{Product} from './search/product';
import{ProductService} from './search/product.service';

//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private query:any;
  private stringQuery:any;
  private Numberquery:any;
  products:Product[];

constructor(private router:Router,private productService:ProductService){

}

ngOnInit(){

  }

search(){
  this.stringQuery=this.query;
  this.Numberquery=parseInt(this.query);
  this.router.navigate(['/home']);
  setTimeout(() => {

  if(isNaN(this.Numberquery)){
  this.router.navigate(['/search',this.query]);
  }
  else{
    this.router.navigate(['/isbn',this.Numberquery]);
  }
}, 50);
  //this.searchComponent.setQuery(this.query);
  //this.passQuery();
  //console.log(this.query);
}



passQuery(){
  //console.log(this.query);
  return this.query;
}
passProduct(){
  return this.products
}


}
