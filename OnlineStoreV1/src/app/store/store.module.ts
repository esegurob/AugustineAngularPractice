import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../Model/Model.module';
import {StoreComponent} from './store.component';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    FormsModule
  ],
  declarations: [
  StoreComponent
],
  exports:
[
    StoreComponent
  ]

})

export class StoreModule {}
