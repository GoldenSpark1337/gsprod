import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-swiper-list-members',
  templateUrl: './swiper-list-members.component.html',
  styleUrls: ['./swiper-list-members.component.css']
})
export class SwiperListMembersComponent implements OnInit {
  public users$: Observable<IUser[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }


}
