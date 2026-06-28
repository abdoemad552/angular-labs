import { Component, inject, input, output, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ProductService } from '../../../core/services/product.service';
import { ItemZoomDirective } from '../../../core/directives/item-zoom.directive';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, ShoppingCartComponent, ItemZoomDirective],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products = input.required<Product[]>();
}
