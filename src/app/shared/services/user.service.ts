import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';
import { ITrack } from '../models/track';
import { IProduct } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environment.apiUrl + "users/";
  public users: IUser[] = [];
  public products: IProduct[] = [];
  public tracks: ITrack[] = [];
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  public getUsers() {
    if (this.users.length > 0) return of(this.users); 
    return this.http.get<IUser[]>(this.baseUrl + "musicians").pipe(
      map(users => {
        this.users = users;
        return users;
      })
    );
  }

  public getUser(username: string) {
    const product = this.users.find(x => x.username === username);
    if (product !== undefined) return of(product);
    return this.http.get<IUser>(this.baseUrl + `${username}`);
  }

  public getTracks(username: string) {
    return this.http.get<ITrack[]>(this.baseUrl + username + "/tracks").pipe(
      map(tracks => {
        this.tracks = tracks;
        return tracks;
      })
    );
  }

  public getProducts(username: string) {
    return this.http.get<IProduct[]>(this.baseUrl + username +"/products").pipe(
      map(products => {
        this.products = products;
        return products;
      })
    );
  }
}
