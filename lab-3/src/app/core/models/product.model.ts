
export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  images: string[];
}
