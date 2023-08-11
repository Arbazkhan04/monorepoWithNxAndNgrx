import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './store/product.action';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http : HttpClient) { }

  getProducts() { 
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductByCatagory(catagory:string)
  {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${catagory}`)
  }
  
}
