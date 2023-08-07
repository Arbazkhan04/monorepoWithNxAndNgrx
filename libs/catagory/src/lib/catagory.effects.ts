import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map, of } from "rxjs";
import { CatagoryService } from "./catagory.service";

import { 
    getCatagoriesActions,
    catagoryActionsFailure,
    catagoryActionsSuccess
}
 from './catagory.action'

@Injectable()

export class catagoryEffects{
    loadCatagories$ = createEffect(() => this.actions$.pipe(
        ofType(getCatagoriesActions),
        exhaustMap(() => this._catagoryService.getCatagories()
          .pipe(
            map(catagories => catagoryActionsSuccess(catagories)),
            catchError(() => of(catagoryActionsFailure("Error Occured")))
          ))
        )
      );
     
      constructor(
        private actions$: Actions,
        private _catagoryService: CatagoryService
      ) {}
}