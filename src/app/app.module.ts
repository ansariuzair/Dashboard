import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { importExpr } from '../../node_modules/@angular/compiler/src/output/output_ast';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TgraphyComponent } from './tgraphy/tgraphy.component';
import { TableComponent } from './table/table.component';
import { MapsComponent } from './maps/maps.component';
import { IconsComponent } from './icons/icons.component';
import { NotiComponent } from './noti/noti.component';
import { UpgradeComponent } from './upgrade/upgrade.component';


export const urt:Routes=[
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'icons',component:IconsComponent},
  {path:'maps',component:MapsComponent},
  {path:'table',component:TableComponent},
  {path:'tgraphy',component:TgraphyComponent},
  {path:'noti',component:NotiComponent},
  {path:'user',component:UserComponent},
  {path:'upgrade',component:UpgradeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IconsComponent,
    MapsComponent,
    TableComponent,
    TgraphyComponent,
    UserComponent,
    NotiComponent,
    UpgradeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(urt)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
