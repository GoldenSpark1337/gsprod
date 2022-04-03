import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOrderToCreate } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CheckouttService {
  baseUrl = environment.apiUrl + "orders/";

  constructor(private http: HttpClient) { }

  createOrder(order: IOrderToCreate) {
    return this.http.post(this.baseUrl, order);
  }

  
} 
