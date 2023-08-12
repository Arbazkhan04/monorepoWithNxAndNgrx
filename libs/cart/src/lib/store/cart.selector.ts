import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { cartState, cartReducer } from "./cart.reducer";

const cartFreatureKey = 'cart'

export const slectCartState = createFeatureSelector<cartState>(cartFreatureKey);
export const selectCart = createSelector(
    slectCartState,
    (state)=>state.cart
) 

export const selectError = createSelector(
    slectCartState,
    (state)=>state.error
)

export const cartFeature = createFeature({
    name:cartFreatureKey,
    reducer:cartReducer
})