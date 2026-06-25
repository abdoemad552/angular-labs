import { Routes } from '@angular/router';
import { productDetailsResolver } from './pages/product-details-page/_resolvers/product-details.resolver';
import { productActivateGuard } from './pages/product-details-page/_guards/product-activate.guard';
import { HomePage } from './pages/home-page/home-page';
import { ProductDetailsPage } from './pages/product-details-page/product-details-page';
import { ProductAddEditPage } from './pages/product-add-edit-page/product-add-edit-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'product/:id/details',
    component: ProductDetailsPage,
    canActivate: [productActivateGuard],
    resolve: {
      product: productDetailsResolver,
    },
  },
  {
    path: 'product/add',
    component: ProductAddEditPage,
  },
  {
    path: 'product/:id/edit',
    component: ProductAddEditPage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
