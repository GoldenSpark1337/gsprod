import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl: string = environment.apiUrl + "products";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProduct[]>(this.baseUrl);
  }
}
