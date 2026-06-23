import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Air Max Pulse',
      price: 129.99,
      originalPrice: 179.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    },
    {
      id: 2,
      name: 'Urban Backpack Pro',
      price: 89.0,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 249.99,
      originalPrice: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    },
    {
      id: 4,
      name: 'Leather Watch',
      price: 195.0,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    },
    {
      id: 5,
      name: 'Running Jacket',
      price: 74.99,
      originalPrice: 110.0,
      image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&q=80',
    },
    {
      id: 6,
      name: 'Smart Water Bottle',
      price: 39.95,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
    },
    {
      id: 7,
      name: 'Minimalist Tote Bag',
      price: 55.0,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
    },
    {
      id: 8,
      name: 'Wireless Earbuds',
      price: 119.0,
      originalPrice: 149.0,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80',
    },
  ];
}
