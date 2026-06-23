import { Component, computed, Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductCardComponent } from '../product-card/product-card.component';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Air Max Pulse',
    category: 'Sneakers',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.5,
    reviewCount: 218,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    badge: 'sale',
    inStock: true,
  },
  {
    id: 2,
    name: 'Urban Backpack Pro',
    category: 'Bags',
    price: 89.0,
    rating: 4.2,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    badge: 'new',
    inStock: true,
  },
  {
    id: 3,
    name: 'Wireless Headphones X',
    category: 'Electronics',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    badge: 'hot',
    inStock: true,
  },
  {
    id: 4,
    name: 'Classic Leather Watch',
    category: 'Accessories',
    price: 195.0,
    rating: 4.6,
    reviewCount: 143,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    inStock: true,
  },
  {
    id: 5,
    name: 'Running Jacket Elite',
    category: 'Clothing',
    price: 74.99,
    originalPrice: 110.0,
    rating: 3.9,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&q=80',
    badge: 'sale',
    inStock: false,
  },
  {
    id: 6,
    name: 'Smart Water Bottle',
    category: 'Accessories',
    price: 39.95,
    rating: 4.1,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
    badge: 'new',
    inStock: true,
  },
  {
    id: 7,
    name: 'Minimalist Tote Bag',
    category: 'Bags',
    price: 55.0,
    rating: 4.3,
    reviewCount: 78,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
    inStock: true,
  },
  {
    id: 8,
    name: 'True Wireless Earbuds',
    category: 'Electronics',
    price: 119.0,
    originalPrice: 149.0,
    rating: 4.4,
    reviewCount: 301,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80',
    badge: 'sale',
    inStock: true,
  },
];

@Component({
  selector: 'app-products-list',
  imports: [ProductFilterComponent, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  private activeCategory = signal('All');
  cartMessage = signal('');

  categories = ['All', ...new Set(MOCK_PRODUCTS.map((p) => p.category))];

  filteredProducts = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All' ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter((p) => p.category === cat);
  });

  onCategoryChange(cat: string) {
    this.activeCategory.set(cat);
  }

  onAddToCart(product: Product) {
    this.cartMessage.set(`✓ "${product.name}" added to cart`);
    setTimeout(() => this.cartMessage.set(''), 2500);
  }

  protected readonly console = console;
}
