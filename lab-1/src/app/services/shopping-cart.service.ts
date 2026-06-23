import { Injectable } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cart: ShoppingCart = {
    items: [],
    totalPrice: 0,
  };

  addToCart(product: Product) {
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
    console.log(`[ADD_TO_CART]: ${this.cart}`);
  }

  removeItem(productId: number) {
    this.cart = {
      ...this.cart,
      items: this.cart.items.filter((i) => i.product.id !== productId),
    };
    console.log(`[REMOVE_ITEM]: ${this.cart}`);
  }

  changeQty(itemChange: { id: number; qty: number }) {
    if (itemChange.qty <= 0) {
      this.removeItem(itemChange.id);
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

    console.log(`[QTY_CHANGE]: ${this.cart}`);
  }
}
