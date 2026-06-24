import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
  addToCart = output<Product>();
  cardClicked = output<Product>();

  protected cartService = inject(ShoppingCartService);

  discountedPrice() {
    return this.product().price * (1 - (this.product().discountPercentage ?? 0) / 100);
  }

  onAddToCart() {
    this.cartService.addToCart(this.product());
    this.addToCart.emit(this.product());
  }

  onCardClicked() {
    this.cardClicked.emit(this.product());
  }
}
