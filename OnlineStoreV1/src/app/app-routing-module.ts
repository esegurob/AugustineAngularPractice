import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from './store/store.module';
import {StoreComponent} from './store/store.component';
import {CartDetailsComponent} from './cart-details/cart-details.component';
import {CheckoutComponent} from './checkout/checkout.component';


const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot([
    {path:"store", component: StoreComponent},
    {path:"cart", component: CartDetailsComponent},
    {path: "checkout", component: CheckoutComponent},
    {path: "**", redirectTo: "/store"}
  ]), BrowserModule, StoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
