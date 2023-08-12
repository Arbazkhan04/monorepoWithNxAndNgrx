import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cart } from './store/cart.action';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(private readonly http:HttpClient) { }
  
  getCartProducts()
  {
    return this.http.get<cart[]>('https://fakestoreapi.com/carts')
  }

}
