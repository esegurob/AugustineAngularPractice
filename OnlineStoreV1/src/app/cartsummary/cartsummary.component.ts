import { Component, OnInit } from '@angular/core';
import {Cart} from '../store/cart.model';

@Component({
  selector: 'cartsummary',
  templateUrl: './cartsummary.component.html',
  styleUrls: ['./cartsummary.component.css']
})
export class CartsummaryComponent implements OnInit {

  constructor(public cart : Cart )

  { }

  ngOnInit() {
  }

}
