import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../product.service";
import { productActions } from "./product.action";
import { catchError, exhaustMap, map, of } from "rxjs";


export const loadProducts = createEffect(
  (actions$ = inject(Actions), 
   productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadPRoduct),
      exhaustMap(() =>
        productService.getProducts().pipe(
          map((prodcuts) => productActions.loadProductSuccess({prodcuts})),
          catchError((error) => of(productActions.loadProductFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);

export const loadProductsByCatagory = createEffect(
  (actions$ = inject(Actions), 
   productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProductByCatagory),
      exhaustMap((action) =>
        productService.getProductByCatagory(action.catagroy).pipe(
          map((prodcuts) => productActions.loadProductSuccess({prodcuts})),
          catchError((error) => of(productActions.loadProductFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);

