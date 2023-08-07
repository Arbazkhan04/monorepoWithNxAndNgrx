import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

  constructor(private readonly http : HttpClient) { }

   getCatagories()
   {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
      );
   }
}
