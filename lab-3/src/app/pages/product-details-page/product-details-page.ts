import { Component, computed, inject, signal } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { ShoppingCartService } from '../../core/services/shopping-cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details-page',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.css',
})
export class ProductDetailsPage {
  product = signal<Product | undefined>(undefined);
  quantity = signal(0);
  totalPrice = computed(() => {
    const p = this.product();
    return p ? this.discountedPrice() * this.quantity() : 0;
  });

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  private cartService = inject(ShoppingCartService);

  ngOnInit() {
    this.route.data.subscribe({
      next: (data) => {
        const product: Product = data['product'];
        console.log('Resolved', product);
        this.product.set(product);
      },
    });
  }

  discountedPrice() {
    return this.product()!.price * (1 - (this.product()!.discountPercentage ?? 0) / 100);
  }

  increment() {
    this.quantity.update((q) => q + 1);
  }

  decrement() {
    this.quantity.update((q) => Math.max(0, q - 1));
  }
}
