import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'gs-profile-visitor-actions',
  templateUrl: './profile-visitor-actions.component.html',
  styleUrls: ['./profile-visitor-actions.component.css']
})
export class ProfileVisitorActionsComponent implements OnInit {
  @Input() user: IUser;
  constructor() { }

  ngOnInit() {
  }

}
