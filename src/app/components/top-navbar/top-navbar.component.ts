import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { ShopService } from 'src/app/shared/services/shop.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ICart } from 'src/app/shared/models/cart';
import { UserService } from 'src/app/shared/services/user.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'gs-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})

export class TopNavbarComponent implements OnInit {
  userCart: any[] = [];
  unreadMessages: number = 0;
  cart$: Observable<ICart>;
  user$: Observable<IUser> | null= this.accountService.currentUser$.pipe(
    switchMap(accountUser => {
      if (accountUser) {
        this.getUnreadMessages();
        return this.userService.getUser(accountUser.username);
      }
      return of(null);
    }) 
  );

  isHoverable: boolean = false;
  timer: any;

  constructor(private _snackBarCard: MatSnackBar, 
      private productService: ShopService, 
      public accountService: AccountService, 
      private cartService: CartService, 
      private userService: UserService,
      private messageService: MessageService) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }

  getUnreadMessages() {
    this.messageService.getMessages(1, 20, "Unread").subscribe(messages => {
      if (messages.length > 20) {
        this.unreadMessages = 20;
      }
      this.unreadMessages = messages.length
    });
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
