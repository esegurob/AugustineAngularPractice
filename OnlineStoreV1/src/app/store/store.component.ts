import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../Model/product.repository';
import {Product} from '../Model/product';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory= null;

  constructor(private repository : ProductRepository) { }

  ngOnInit() {
  }
  get products() : Product[]{

    return this.repository.getProducts(this.selectedCategory);
  }
  get categories() : string[]{
    return this.repository.getCategories();
  }

  changeCategory ( newCategory? : string)
  {
    this.selectedCategory=newCategory;
  }
}
