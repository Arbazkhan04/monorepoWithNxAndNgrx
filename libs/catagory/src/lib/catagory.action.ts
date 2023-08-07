import { createAction } from "@ngrx/store";

export const getCatagoriesActions = createAction('[Catagory] Get Catagory')
export const catagoryActionsSuccess = createAction(
    '[Catagory] Get Catagories Success',
     (catagories:string[])=>({catagories})
);
export const catagoryActionsFailure = createAction(
    '[Catagory] Get Catagories Failure',
    (error:string)=>({error})
)

//for reducer prupose

// let arrayNames = ['santosh','kaushal'];

// arrayNames.push('sravan');

// arrayNames = [...arrayNames, 'sravan'];