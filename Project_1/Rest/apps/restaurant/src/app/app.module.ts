import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Library1Module} from '@rest/library1';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule,Routes} from '@angular/router'
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OrdersComponent } from './orders/orders.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

  {path: 'home' ,component: HomeComponent},
  {path: 'orders',component: OrdersComponent},
  {path: 'search',component: SearchComponent}

];

@NgModule({
  declarations: [AppComponent, LayoutComponent, OrdersComponent, SearchComponent, HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule,RouterModule,Library1Module, 
    LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, 
    MatIconModule, MatListModule,
  RouterModule.forRoot(routes,
    {enableTracing:true}
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
