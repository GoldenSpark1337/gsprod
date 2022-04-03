import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { ShopService } from 'src/app/shared/services/shop.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ICart } from 'src/app/shared/models/cart';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})

export class TopNavbarComponent implements OnInit {
  currentUser$: Observable<IUser> = null;
  userCart: any[] = [];
  unreadMessages: number = 0;
  cart$: Observable<ICart>;
  user$: Observable<IUser>;

  isHoverable: boolean = false;
  timer: any;

  constructor(private _snackBarCard: MatSnackBar, 
      private productService: ShopService, 
      public accountService: AccountService, 
      private cartService: CartService, 
      private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
    this.cart$ = this.cartService.cart$;
    this.getUser();
  }

  getUser() {
    let username: string;
    this.currentUser$.subscribe(res => username = res.username);
    if (username) {
      this.user$ = this.userService.getUser(username);
    }
  }
  
  openSnackBar(): void {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    this._snackBarCard.open("You have no items in your Cart", "OK", config);
  }

  timeout(show: boolean): void {
    clearTimeout(this.timer);
    this.isHoverable = show;
  }

  showHoverable(): void {
    this.timer = setTimeout(() => {this.timeout(true)}, 500);
  }

  hideHoverable(): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {this.timeout(false)}, 500);
  }

  logout(){
    this.accountService.logout();
  }
}
