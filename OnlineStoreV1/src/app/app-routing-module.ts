import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from './store/store.module';
import {StoreComponent} from './store/store.component';
import {CartDetailsComponent} from './cart-details/cart-details.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {StorefirstGuards} from './storefirst.guards';

const routes: Routes = [];
@NgModule({
  imports: [ BrowserModule, StoreModule, RouterModule.forRoot([
    {path:"store", component: StoreComponent, canActivate: [StorefirstGuards]},
    {path:"cart", component: CartDetailsComponent, canActivate: [StorefirstGuards]},
    {path: "checkout", component: CheckoutComponent, canActivate: [StorefirstGuards]},
    {path: "**", redirectTo: "/store"}
    ])],
providers: [StorefirstGuards],
  exports: [RouterModule]
})
export class AppRoutingModule { }
