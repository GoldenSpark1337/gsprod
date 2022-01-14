import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'gs-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})

export class TopNavbarComponent implements OnInit {
  unreadMessages: number = 0;
  matBudgeCounter: number = 0;
  showHoverable: boolean = false;
  constructor(private _snackBarCard: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(): void {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    this._snackBarCard.open("You have no items in your Cart", "OK", config);
  }

  
}
