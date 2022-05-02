import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'gs-edit-profile-info',
  templateUrl: './edit-profile-info.component.html',
  styleUrls: ['./edit-profile-info.component.css']
})
export class EditProfileInfoComponent implements OnInit {
  @ViewChild("editForm") editForm: NgForm;
  maxFileSize = 10 * 1024 * 1024;
  baseUrl = environment.apiUrl + 'users/';
  user$: Observable<IUser> = this.currentUser.currentUser$.pipe(
    switchMap(currentUser => this.userService.getUser(currentUser.username))
  );
  user = this.user$.subscribe(res => this.user = res);

  constructor(private currentUser: AccountService, private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe(() => {
      this.snackBar.open("Updated succesfully", "OK");
      this.editForm.reset(this.user);
    });
  }
}
