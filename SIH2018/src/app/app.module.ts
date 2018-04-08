import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { RulesComponent } from './rules/rules.component';
import {UserComponent} from './user/user.component';
import { UserLoginComponent } from './user/login/login.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { AdminComponent } from './admin/admin.component';
import { ChallanDetailComponent } from './home/challan-detail/challan-detail.component';
import { AdminDetailsComponent } from './admin/admin-details/admin-details.component';
import { SignupComponent } from './user/signup/signup.component';
import {Login} from'./user/user-login';
import {LoginService} from './user/user-login.service';
import {UsersService} from './user/user-details/user.service';
import {AdminSignupComponent} from './admin/admin-details/admin-signup/admin-signup.component';
import { CommercialComponent } from './commercial/commercial.component';
import { CommercialCarsComponent } from './commercial/commercial-details/commercial-cars/commercial-cars.component';
import { CommercialDetailsComponent } from './commercial/commercial-details/commercial-details.component';
import {CarsService} from './commercial/commercial-details/commercial-cars.service';
import {Api} from './providers/api/api';
import {Citizen} from './user/signup/signup';
import { AdminHeatmapComponent } from './admin/admin-details/admin-heatmap/admin-heatmap.component';
import {ChallanService} from './admin/admin-details/challan.service';
import * as fs from "fs"



//import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FAQComponent,
    RulesComponent,
    UserComponent,
    UserLoginComponent,
    UserDetailsComponent,
    AdminComponent,
    AdminSignupComponent,
    ChallanDetailComponent,

    AdminDetailsComponent,

    SignupComponent,

    CommercialComponent,

    CommercialCarsComponent,

    CommercialDetailsComponent,

    AdminHeatmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
    {path:'',redirectTo:'home',pathMatch :'full'},
    {path :'home', component:HomeComponent},

    {path :'faq', component:FAQComponent},
    {path : 'admin', component: AdminComponent},
      {path :'admin/admindetails' , component: AdminDetailsComponent},
    {path :'rules', component:RulesComponent},
    {path : 'user/login', component: UserComponent},
      {path : 'user/userdetails', component: UserDetailsComponent},
      {path : 'user/signup', component: SignupComponent},
      {path :'commercial', component:CommercialComponent },
      {path :'commercial/commercialdetails' , component :CommercialDetailsComponent}
    ])
  ],
  providers: [LoginService,UsersService,CarsService,Api,ChallanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
