import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Product} from './product';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'HTML5 by Emmanuel', 'Programming Books', 'Learn programming in 25 days', 100000),
    new Product(2, 'CODE in 5 Days by Pablo', 'Programming Books', 'Best book to learn Angular', 90000),
    new Product(3, 'AI and The Future by Augustine', 'Artificial Intelligence Books', 'Artificial Intelligence for all', 80000),
    new Product(4, 'Data Science for Beginners by Alberto', 'Data Science Books', 'Data Science', 70000),
    new Product(5, 'Software Engineering by Daniel', 'Data Science Books', 'Software Engineering Books', 250000),
    new Product(6, 'Photoshop for everyone by Lukeman', 'Graphics', 'Graphics Design Books', 300000),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}
