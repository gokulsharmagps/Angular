import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
import {ActivatedRoute,Router,Params} from '@angular/router';
 import {Product} from '../search/product';
 import {ProductService} from '../search/product.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-isbn',
  templateUrl: './isbn.component.html',
  styleUrls: ['./isbn.component.css']
})
export class IsbnComponent implements OnInit {
  private query:any;
  private Numberquery:any;
  private empty=false;
  private products:any;
  constructor(private router:Router,private productService:ProductService,private route:ActivatedRoute,private domSanitizer:DomSanitizer) { }


  ngOnInit(){
    this.route.params.forEach((params:Params)=>this.query=params['id']);
    this.Numberquery=parseInt(this.query);
    console.log(typeof this.Numberquery);
      console.log("number");
      this.productService.getProduct(this.Numberquery).subscribe(response => {
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
    //   this.products=this.productService.getProducts().pipe(Map(products => {
    //     return products.filter(product => product.isbn13 ===this.Numberquery);
    //   },error =>{ console.log(error);})
    // );

    }

    castDate(date){
       return new Date(date);
     }

     castUrl(url){
       return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
     }



}
