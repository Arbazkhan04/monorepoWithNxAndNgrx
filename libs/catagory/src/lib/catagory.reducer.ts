import { createReducer, on } from "@ngrx/store";
import {catagoryActionsFailure,catagoryActionsSuccess} from "./catagory.action"

export interface CategoryState {
    categories: string[];
    currentCategory: string;
    error: string;
  }

  const intialState : CategoryState=
  {
    categories : [],
    currentCategory : '',
    error:''
  }

  export const catagoryReducer = createReducer(
    intialState,
    on(catagoryActionsSuccess,(state,action)=>{
        return{
            ...state,
            categories: action.catagories,
            error:''
        };
    }),
    on(catagoryActionsFailure,(state,action)=>{
        return{
            ...state,
            categories:[],
            error:action.error
        };
    })
  );