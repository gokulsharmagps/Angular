import { Component,OnInit } from '@angular/core';
import {MenuService} from './menu.service';
import {MENU} from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
  menus:MENU[];
  order:Order[];

constructor(private menuService:MenuService){

}
ngOnInit(){
  this.menuService.getMenus().subscribe(
        response => {
          this.menus = response.json();
          console.log(this.menus);

        }, error => {
          console.log(error);
      }
    );

  }


  addItem(){
    this.additems(this.item);
  }


additems(item){
  this.order.name=item.name;
  this.order.price=item.price;
  this.order.quantity++;
}

}



                                                                                                                          
