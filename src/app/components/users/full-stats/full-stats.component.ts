import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-full-stats',
  templateUrl: './full-stats.component.html',
  styleUrls: ['./full-stats.component.css']
})
export class FullStatsComponent implements OnInit {
  proPage: boolean;

  constructor(private accountService: AccountService, private userService: UserService) { }

  ngOnInit() {
    this.checkUserPrevilege();
  }

  checkUserPrevilege() {
    this.accountService.currentUser$.pipe(
      switchMap((user: IUser) => {
        return this.userService.getUser(user.username);
      }),
      tap(user => {
        if (user.roles.length > 1 || user.roles.includes('Admin')) this.proPage = true;
      }
      )
      ).subscribe();
  }
}
