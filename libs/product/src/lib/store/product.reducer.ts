import { createReducer, on } from "@ngrx/store";
import { Product, productActions } from "./product.action";

export interface ProductState{
    products:Product[],
    productCount:number,
    error:string,
}

export const initialState: ProductState = {
    products: [],
    productCount: 0,
    error: '',
  };

export const productReducer = createReducer(
   initialState,
   on(productActions.loadProductSuccess,(state,action)=>({
   ...state,
   products:action.prodcuts,
   productCount:action.prodcuts.length,
   error:''
   })),
   on(productActions.loadProductFailure,(state,action)=>({
    ...state,
    products:[],
    productCount:0,
    error:action.error
   }))
)