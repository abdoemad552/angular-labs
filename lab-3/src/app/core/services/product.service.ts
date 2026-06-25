import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getAllProducts(): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/products');
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`https://dummyjson.com/products/${productId}`);
  }
}
