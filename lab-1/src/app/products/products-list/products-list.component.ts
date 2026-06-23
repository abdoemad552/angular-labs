import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCart } from '../../models/shopping-cart.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, ShoppingCartComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {

  @Input()
  products!: Product[];

  cart: ShoppingCart = {
    items: [],
    totalPrice: 0,
  };

  onAddToCart(product: Product) {
    const item = this.cart.items.find((i) => i.product.id === product.id);
    if (item) {
      this.cart.items.map((i) => {
        if (i.product.id === product.id) {
          i.quantity++;
        }
      });
      this.cart.totalPrice += product.price;
    } else {
      this.cart.items.push({
        product,
        quantity: 1,
      });
    }
    console.log(`[ADD_TO_CART]: ${JSON.stringify(this.cart)}`);
  }

  onRemoveItem(productId: number) {
    this.cart = {
      ...this.cart,
      items: this.cart.items.filter((i) => i.product.id !== productId),
    };
    console.log(`[REMOVE_ITEM]: ${JSON.stringify(this.cart)}`);
  }

  onChangeQty(itemChange: { id: number; qty: number }) {
    if (itemChange.qty <= 0) {
      this.onRemoveItem(itemChange.id);
      return;
    }
    this.cart = {
      ...this.cart,
      items: this.cart.items.map((i) => {
        if (i.product.id === itemChange.id) {
          i.quantity = itemChange.qty;
        }
        return i;
      }),
    };

    console.log(`[QTY_CHANGE]: ${JSON.stringify(this.cart)}`);
  }
}
