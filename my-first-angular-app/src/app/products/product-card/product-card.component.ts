import { Component, computed, EventEmitter, Input, Output, output, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductBadgeComponent } from '../product-badge/product-badge.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [ProductBadgeComponent, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  addToCart = new EventEmitter<Product>();
  @Output() productClicked = new EventEmitter<string>();

  wishlisted = signal(false);

  stars = computed(() => Array.from({ length: 5 }, (_, i) => i < Math.round(this.product.rating)));

  discountPercent = computed(() => {
    if (!this.product.originalPrice) return 0;
    return Math.round((1 - this.product.price / this.product.originalPrice) * 100);
  });

  toggleWishlist() {
    this.wishlisted.update((v) => !v);
  }
}
