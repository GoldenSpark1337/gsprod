import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';
import { ITrack } from '../models/track';
import { IProduct } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ILike } from '../models/like';

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

  public updateUser(user: IUser) {
    return this.http.put(this.baseUrl, user);
  }

  public getTracks(username: string, isDraft: boolean = false) {
    let params = new HttpParams();
    params = params.append("isDraft", isDraft);

    return this.http.get<ITrack[]>(this.baseUrl + username + "/tracks", {observe: "response", params}).pipe(
      map(tracks => {
        this.tracks = tracks.body;
        return tracks.body;
      })
    );
  }



  public getProducts(username: string, isDraft: boolean = false) {
    let params = new HttpParams();
    params = params.append("isDraft", isDraft);

    return this.http.get<IProduct[]>(this.baseUrl + username +"/products", {observe: "response", params}).pipe(
      map(products => {
        this.products = products.body;
        return products.body;
      })
    );
  }

  public getFavourite(id: number) {
    return this.http.get<ILike[]>(environment.apiUrl + "likes?predicate=liked&id=" + id.toString());
  }
}
