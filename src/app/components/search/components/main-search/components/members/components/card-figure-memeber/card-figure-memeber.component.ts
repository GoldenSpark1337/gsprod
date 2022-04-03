import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'gs-card-figure-memeber',
  templateUrl: './card-figure-memeber.component.html',
  styleUrls: ['./card-figure-memeber.component.css']
})
export class CardFigureMemeberComponent implements OnInit {
  @Input() user: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
