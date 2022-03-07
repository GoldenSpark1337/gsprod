import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl: string = "http://localhost:5057/api/";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProduct[]>(this.baseUrl + "products");
  }
}
