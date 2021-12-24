import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'gs-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})

export class TopNavbarComponent implements OnInit {
  unreadMessages: number = 0;
  matBudgeCounter: number = 0;
  constructor(private _snackBarCard: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(): void {
    this._snackBarCard.open("You have no items in your Cart", "OK");
  }

}
