import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
    productFeature,
    loadProducts,
    loadProductsByCatagory,
  } from '@e-commerence-using-nx-ngrx/product';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { cartFeature, loadCartProduct } from '@e-commerence-using-nx-ngrx/cart';

export const appRoutes: Route[] = [
    {
        path:'',
        redirectTo:'product',
        pathMatch:'full'
    },

    {
      path:'product',
      loadComponent:() => import('@e-commerence-using-nx-ngrx/product').then((m)=>m.ProductComponent),
      providers:[
         provideState(productFeature),
         provideEffects({loadProducts })
        ]
    },

    {
    path: 'product/:categoryName',
    loadComponent: () => import('@e-commerence-using-nx-ngrx/product').then((m) => m.ProductComponent),
    providers:[
      provideState(productFeature),
      provideEffects({loadProducts,loadProductsByCatagory})
    ]
    },
    {
      path:'cart',
      loadComponent:() => import('@e-commerence-using-nx-ngrx/cart').then((m)=>m.CartComponent),
      providers:[
        provideState(cartFeature),
        provideEffects({loadCartProduct})
      ]
    }
];
