import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-wrapper-member-profile-content',
  templateUrl: './wrapper-member-profile-content.component.html',
  styleUrls: ['./wrapper-member-profile-content.component.css']
})
export class WrapperMemberProfileContentComponent implements OnInit {
  user: IUser;
  currentUsername: string; 

  constructor(private userService: UserService, private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.loadUser(); 
  }

  private loadUser() {
    this.userService.getUser(this.route.snapshot.paramMap.get("username")).subscribe(user => {
      this.user = user;
    });
  }

  private getCurrentUser() {
    this.accountService.currentUser$.subscribe(((user: IUser) => {
      if (user) {
        this.currentUsername = user.username;
      }
    }));
  }

}
