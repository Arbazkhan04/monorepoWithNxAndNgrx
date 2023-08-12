import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { cartActions } from '../store/cart.action';
import { selectCart } from '../store/cart.selector';

@Component({
  selector: 'e-commerence-using-nx-ngrx-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit{

  constructor(private store:Store){}

  cart$= this.store.select(selectCart)

  ngOnInit() {
      this.store.dispatch(cartActions.loadCart())
  }
}
