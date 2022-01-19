import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'gs-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})

export class TopNavbarComponent implements OnInit {
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
  matBudgeCounter: number = this.user.cartTracks.length;
  showHoverable: boolean = false;
  private _username: string = this.user.username;
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  private _userPlan: string = this.user.userPlan;
  public get userPlan(): string {
    return this._userPlan;
  }
  public set userPlan(value: string) {
    this._userPlan = value;
  }

  constructor(private _snackBarCard: MatSnackBar) { }

  ngOnInit(): void {
    
  }
  openSnackBar(): void {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    this._snackBarCard.open("You have no items in your Cart", "OK", config);
  }

  public get userCartTracks() {
    return this.user.cartTracks;
  }
}
