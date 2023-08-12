
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export interface cart {
    id:number,
    userId:number,
    data:Date,
    products:[
        {
            productId:number,
            quantity:number
        }
    ]
}
export const cartActions = createActionGroup({
    source: 'cart',
    events: {
    loadCart:emptyProps(),
    loadCartSuccess:props<{cart:cart[]}>(),
    loadCartFailure:props<{error:string}>()
    },
});
