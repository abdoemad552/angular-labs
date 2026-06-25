import { Injectable, signal } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cart = signal<ShoppingCart>({
    items: [],
    totalPrice: 0,
  });

  addToCart(product: Product) {
    const productItem = this.cart().items.find((i) => i.product.id === product.id);

    if (productItem) {
      this.changeQty({ id: productItem.product.id, qty: productItem.quantity + 1 });
    } else {
      this.cart.update((cart) => {
        const updatedItems = [...cart.items, { product, quantity: 1 }];
        return {
          items: updatedItems,
          totalPrice: cart.totalPrice + product.price,
        };
      });
    }
  }

  removeItem(productId: number) {
    this.cart.update(cart => {
      const updatedItems = cart.items.filter((i) => i.product.id !== productId);
      return {
        items: updatedItems,
        totalPrice: updatedItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
      };
    });
  }

  changeQty(itemChange: { id: number; qty: number }) {
    if (itemChange.qty <= 0) {
      this.removeItem(itemChange.id);
      return;
    }
    this.cart.update((cart) => {
      const updatedItems = cart.items.map((i) =>
        i.product.id === itemChange.id
          ? { ...i, quantity: itemChange.qty }
          : i
      );
      return {
        items: updatedItems,
        totalPrice: updatedItems.reduce(
          (sum, i) => sum + i.product.price * i.quantity, 0)
      };
    });
  }
}
