import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  protected cartService = inject(ShoppingCartService);
}
