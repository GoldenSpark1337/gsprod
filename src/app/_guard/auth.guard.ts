import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AccountService } from '../shared/services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: AccountService, private _snackBarCard: MatSnackBar, private _router: Router) {
    
  }

  canActivate(): Observable<boolean> {
    return this.userService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        this._router.navigateByUrl("/account/login");
        this._snackBarCard.open("You must be authorized")
        return false;
      })
    );
  }
  
}
