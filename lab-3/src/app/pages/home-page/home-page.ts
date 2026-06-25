import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { ProductsListComponent } from '../../shared/products/products-list/products-list.component';

@Component({
  selector: 'app-home-page',
  imports: [ProductsListComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
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
