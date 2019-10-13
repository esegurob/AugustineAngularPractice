import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../Model/Model.module';
import {StoreComponent} from './store.component';
import {NgModule} from '@angular/core';
import {CartsummaryComponent} from '../cartsummary/cartsummary.component';
import {CartDetailsComponent} from '../cart-details/cart-details.component';
import {CheckoutComponent} from '../checkout/checkout.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
  StoreComponent, CartsummaryComponent, CartDetailsComponent, CheckoutComponent
],
  exports:
[
    StoreComponent,
    CartDetailsComponent,
    CheckoutComponent
  ]

})

export class StoreModule {}
