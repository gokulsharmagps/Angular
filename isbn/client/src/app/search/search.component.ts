import { Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
import {AppComponent} from '../app.component';
import {ActivatedRoute,Router,Params} from '@angular/router';
 import {Product} from './product';
 import {ProductService} from './product.service';
// import {Product} from './product';
// import {ProductService} from './product.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private query:any;
  private stringQuery;
    products:any;
private empty=true;
private Numberquery;

    constructor(private router:Router,private productService:ProductService,private route:ActivatedRoute,private domSanitizer:DomSanitizer) { }

    ngOnInit() {
      this.route.params.forEach((params:Params)=>this.query=params['id']);
      //this.query=this.appComponent.passQuery();
      this.stringQuery=this.query;
      //console.log(typeof this.query);
      this.Numberquery=parseInt(this.query);
      // console.log(typeof this.Numberquery);
      // console.log(this.Numberquery);
    this.productService.getProduct(this.stringQuery).subscribe(response => {
      this.products = response;
      console.log(this.products);
      if(this.products.length==0){
        this.empty=true;
      }
      else{
        this.empty=false;
      }
    }, error => {
      console.log(error);
  });
}


      //this.products=this.appComponent.passProduct();
      //console.log(this.query);


      castDate(date){
         return new Date(date);
       }

       castUrl(url){
         return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
       }


    }


    // this.challanService.getChallans().toPromise().then(challans=>challans.filter(challan=>{
    //   return challan.phoneNumber.includes(this.number);
    // })).then(challan=>this.challans=challan);
