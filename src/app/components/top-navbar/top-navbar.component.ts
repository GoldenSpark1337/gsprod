import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { ShopService } from 'src/app/shared/services/shop.service';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'gs-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})

export class TopNavbarComponent implements OnInit {
  currentUser$: Observable<IUser> = null;
  user = 
  {
    username: "Admin",
    userPlan: "PRO PAGE",
    messages: 5,
    cartTracks: [
      {
        artwork: "https://main.v2.beatstars.com/fit-in/63x63/filters:format(.jpeg):quality(80):fill(000000)/users/prod/224460/i4t70k9rv.jpg",
        title: "Bezerk",
        price: "41.11",
        type: "Track"
      },
      {
        artwork: "https://main.v2.beatstars.com/fit-in/63x63/filters:format(.jpeg):quality(80):fill(000000)/users/prod/224460/i4t70k9rv.jpg",
        title: "Bezerk",
        price: "41.11",
        type: "Track"
      },
      {
        artwork: "https://main.v2.beatstars.com/fit-in/63x63/filters:format(.jpeg):quality(80):fill(000000)/users/prod/224460/i4t70k9rv.jpg",
        title: "Bezerk",
        price: "41.11",
        type: "Track"
      }
    ]
  };
  unreadMessages: number = 0;
  matBudgeCounter: number = 3;

  isHoverable: boolean = false;
  timer: any;

  constructor(private _snackBarCard: MatSnackBar, private productService: ShopService, public userService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.userService.currentUser$;
    console.log(this.currentUser$);
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
    console.log(this.currentUser$);
    this.timer = setTimeout(() => {this.timeout(true)}, 500);
  }

  hideHoverable(): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {this.timeout(false)}, 500);
  }

  public get userCartTracks() {
    return this.user.cartTracks;
  }

  logout(){
    console.log(this.userService.currentUser$)
    this.userService.logout();
  }
}
