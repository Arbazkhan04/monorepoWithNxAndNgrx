import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: 'product/:categoryName',
    loadComponent: () => import('@e-commerence-using-nx-ngrx/product').then((m) => m.ProductComponent),
    }
];
