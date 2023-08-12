

import { createReducer, on } from "@ngrx/store";
import { cart, cartActions } from "./cart.action";

export interface cartState{
    cart:cart[],
    error:string,
}

export const initialState: cartState = {
    cart: [],
    error: '',
  };

export const cartReducer = createReducer(
   initialState,
   on(cartActions.loadCartSuccess,(state,action)=>({
   ...state,
      cart:action.cart,
      error:''
   })),
   on(cartActions.loadCartFailure,(state,action)=>({
    ...state,
     cart:[],
    error:action.error
   }))
)