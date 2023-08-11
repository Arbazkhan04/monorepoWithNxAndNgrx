import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { productActions } from '../store/product.action';
import { selectProduct } from '../store/product.selector';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'e-commerence-using-nx-ngrx-product',
  standalone: true,
  imports: [CommonModule ,MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() set categoryName(name:string)
  {
    if(name)
    {
      this.store.dispatch(productActions.loadProductByCatagory({catagroy:name}))
    }
    else
    {
      this.store.dispatch(productActions.loadPRoduct())
    }
  }
 
  constructor(private readonly store:Store){}
 
  products$ = this.store.select(selectProduct);

  

  /*ngOnInit():void {
    this.store.dispatch(productActions.loadPRoduct())
  }*/
}


