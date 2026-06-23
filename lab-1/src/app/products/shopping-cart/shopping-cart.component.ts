import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCart } from '../../models/shopping-cart.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  imports: [CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {

  @Input({ required: true })
  shoppingCart!: ShoppingCart;

  @Output()
  removeItem = new EventEmitter<number>();

  @Output()
  changeQty = new EventEmitter<{ id: number; qty: number }>();
}
