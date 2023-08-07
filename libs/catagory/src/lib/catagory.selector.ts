import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoryState, catagoryReducer } from "./catagory.reducer";

const catagoryFeatureKey = 'catagory';

export const selectCatagoryState = createFeatureSelector<CategoryState>(catagoryFeatureKey);

export const selectCatagories = createSelector(
    selectCatagoryState,
    (state)=>state.categories
)

export const selectError = createSelector(
    selectCatagoryState,
    (state)=>state.error
)

export const catagoryFeature = createFeature({
    name : catagoryFeatureKey,
    reducer : catagoryReducer
})