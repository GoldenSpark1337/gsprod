import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/user';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AccountService {
  private baseUrl: string = environment.apiUrl+ "users";
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private route: Router) { }
  
  getUsers() {
    return this.http.get<IUser>(this.baseUrl);
  }

  // getCurrentUserValue() {
  //   return this.currentUserSource.;
  // }

  // loadCurrentUser(token: string) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set("Authorization", `Bearer ${token}`);
  //   return this.http.get(this.baseUrl + "", {headers}).pipe(
  //     map((user: IUser) => {
  //       if (user) {
  //         localStorage.setItem("token", user.token);
  //         this.currentUserSource.next(user);
  //       }
  //     })
  //   );
  // }

  login(model: any) {
    return this.http.post(this.baseUrl + "/login", model).pipe(
      map((response: IUser) => {
        const user = response;
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
          this.route.navigateByUrl("/dashboard");
        }
        console.error();
      })
    )
  }

  register(model: any) {
    return this.http.post(this.baseUrl + "/register", model).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
          return user;
        }
        return user;
      })
    )
  }

  setCurrentUser(user: IUser) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
    this.route.navigateByUrl("/");
  }

  checkEmailExists(email: string) {
    return this.http.get(this.baseUrl + "/emailexists?email=" + email)
  }
}
