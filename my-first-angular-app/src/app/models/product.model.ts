
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: 'new' | 'sale' | 'hot' | 'out-of-stock';
  inStock: boolean;
}
