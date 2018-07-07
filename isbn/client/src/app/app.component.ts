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
  suggestion:any;
  private showDropDown=false;
constructor(private router:Router,private productService:ProductService){

}

ngOnInit(){

  }

search(passedQuery){
  this.showDropDown=false;
  this.query=passedQuery;
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

Findsuggestion(){
  if(this.query.length>0){
  this.stringQuery=this.query;
  this.Numberquery=parseInt(this.query);
        if(isNaN(this.Numberquery)){
          this.productService.getProduct(this.stringQuery).subscribe(response => {
            this.suggestion = response;
            console.log(this.suggestion);
                  if(this.suggestion.length==0){
                      this.showDropDown=false;
                    }
                    else{
                      this.showDropDown=true;
                    }
                  }, error => {
                    console.log(error);
                  });


              }
              else{
                this.showDropDown=false;
              }
        }

        else{
          this.showDropDown=false;
        }
}


passQuery(){
  //console.log(this.query);
  return this.query;
}
passProduct(){
  return this.products
}

closeDropDown(){
  this.showDropDown=false;
}

}
