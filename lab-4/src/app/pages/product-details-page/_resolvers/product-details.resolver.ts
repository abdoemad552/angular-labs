import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { inject } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';

export const productDetailsResolver: ResolveFn<Product> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log("Product details resolver...");
  const productService = inject(ProductService);
  const productId = Number(route.paramMap.get('id'));
  return productService.getProductById(productId);
}
