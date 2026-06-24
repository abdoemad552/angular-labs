import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [ProductsListComponent, ProductsListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  products = signal<Product[]>([]);

  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.products.set(response.products);
      },
    });
  }
}
