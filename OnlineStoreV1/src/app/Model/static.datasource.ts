import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Product} from './product';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Grocery Chains', 'Category 1', 'Sneaker Shoe (Category 1)', 100),
    new Product(2, 'T-shirt', 'Category 1', 'Sport T-shirt Hight Quality (Category 1)', 90),
    new Product(3, 'Computers', 'Category 1', 'Dell (Category 1)', 80),
    new Product(4, 'Graphic T-shirt Grey L', 'Category 1', 'Cotton T-shirt Hight Quality (Category 1)', 70),
    new Product(4, 'Watch', 'Category 2', 'CR7 (Category2)', 250)
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}
