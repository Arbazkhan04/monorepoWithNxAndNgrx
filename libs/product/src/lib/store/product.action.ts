
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export interface Product {
    id:number,
    title:string,
    price:number,
    catagrory:string,
    description:string,
    image:string
}
export const productActions = createActionGroup({
    source: 'Product',
    events: {
    loadPRoduct:emptyProps(),
    loadProductByCatagory:props<{catagroy:string}>(),
    loadProductSuccess:props<{prodcuts:Product[]}>(),
    loadProductFailure:props<{error:string}>()
    },
});