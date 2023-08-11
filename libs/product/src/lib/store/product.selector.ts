import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, productReducer } from "./product.reducer";

const productFreatureKey = 'product'

export const slectProductState = createFeatureSelector<ProductState>(productFreatureKey);
export const selectProduct = createSelector(
    slectProductState,
    (state)=>state.products
) 

export const selectProductByCatagory = (catagory:string) =>createSelector(
    slectProductState,
    (state)=>state.products.filter((products)=>products.catagrory==catagory)
    )

export const selectError = createSelector(
    slectProductState,
    (state)=>state.error
)

export const productFeature = createFeature({
    name:productFreatureKey,
    reducer:productReducer
})