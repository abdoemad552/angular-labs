import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CurrencyPipe } from '@angular/common';
import { ShoppingCartService } from '../../../core/services/shopping-cart.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
  addToCart = output<Product>();
  cardClicked = output<Product>();

  protected cartService = inject(ShoppingCartService);
  protected router = inject(Router);

  discountedPrice() {
    return this.product().price * (1 - (this.product().discountPercentage ?? 0) / 100);
  }

  onAddToCart(event: Event) {
    event.stopPropagation();
    this.cartService.addToCart(this.product());
    this.addToCart.emit(this.product());
  }

  onCardClicked() {
    this.cardClicked.emit(this.product());
  }

  onEdit() {
    this.router.navigate(['product', this.product().id, 'edit']);
  }
}
