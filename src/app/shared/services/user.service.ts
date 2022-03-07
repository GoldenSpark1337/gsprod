import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';

@Injectable({providedIn: 'root'})
export class UserService {
  private baseUrl: string = "http://localhost:5057/api/";
  constructor(private httpClient: HttpClient) { }
  
  getUsers() {
    return this.httpClient.get<IUser>(this.baseUrl + "users");
  }
}
