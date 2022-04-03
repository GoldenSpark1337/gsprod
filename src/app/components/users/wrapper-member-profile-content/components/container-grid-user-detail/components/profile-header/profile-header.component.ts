import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'gs-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() user$: Observable<IUser>;
  @Input() currentUser: IUser;
  constructor() { }

  ngOnInit() {
  }

}
