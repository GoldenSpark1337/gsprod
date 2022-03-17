import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environment.apiUrl + "users/";
  
  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<IUser[]>(this.baseUrl + "musicians");
  }

  public getUser(username: string) {
    return this.http.get<IUser>(this.baseUrl + username);
  }
}
