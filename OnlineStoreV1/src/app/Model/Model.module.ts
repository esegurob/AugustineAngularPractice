import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {NgModule} from '@angular/core';
import {Cart} from '../store/cart.model';

@NgModule
({
  providers: [ProductRepository, StaticDataSource, Cart]
})

export class ModelModule {
}
