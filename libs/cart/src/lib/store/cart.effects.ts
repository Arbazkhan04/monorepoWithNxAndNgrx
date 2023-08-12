import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CartService } from "../cart.service";
import { cartActions } from "./cart.action";
import { catchError, exhaustMap, map, of } from "rxjs";


export const loadCartProduct = createEffect(
    (actions$ = inject(Actions), 
     cartService = inject(CartService)) => {
      return actions$.pipe(
        ofType(cartActions.loadCart),
        exhaustMap(() =>
        cartService.getCartProducts().pipe(
            map((cart) => cartActions.loadCartSuccess({cart})),
            catchError((error) => of(cartActions.loadCartFailure({ error })))
          )
        )
      );
    },
    { functional: true }
  );