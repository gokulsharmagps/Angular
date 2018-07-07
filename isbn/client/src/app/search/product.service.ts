
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Product} from './product';




@Injectable()
export class ProductService{
products:Array<any>;

  headers= new HttpHeaders({
    'Content-Type':'application/json',
  });
  // private messageSource=new BehaviorSubject<number>("Default message");
  // currrentMessage =this.messageSource.asObservable();

  constructor(private http:HttpClient){}


  getProducts():Observable<any>{
    let url="http://localhost:3000/products";
    return this.http.get(url,{headers:this.headers});
  }


  getProduct(title){
    let url="http://localhost:3000/products";
    return this.http.get(url + '/' + title ,{headers:this.headers});
  }



  // transferContent(number:number){
  //   this.messageSource.next(number);
  // }





}
