import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/models/product';
import { ITrack } from 'src/app/shared/models/track';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-container-grid-user-detail',
  templateUrl: './container-grid-user-detail.component.html',
  styleUrls: ['./container-grid-user-detail.component.css']
})
export class ContainerGridUserDetailComponent implements OnInit {
  user$: Observable<IUser>;
  currentUser: IUser;
  tracks$: Observable<ITrack[]>;
  products$: IProduct[];

  constructor(
    private userService: UserService, 
    private accountService: AccountService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCurrentUser();
    this.loadUser();
    this.tracks$ = this.userService.getTracks(this.route.snapshot.paramMap.get("username"));
    this.userService.getProducts(this.route.snapshot.paramMap.get("username"));
    this.tracks$.subscribe((track)=>{console.log(track)})
    this.userService.getTracks(this.route.snapshot.paramMap.get("username")).subscribe(res => console.log(res));
    this.user$.subscribe(res => console.log(res))
  }

   private loadUser() {
    this.user$ = this.userService.getUser(this.route.snapshot.paramMap.get("username"));
  }

  private getCurrentUser() {
    this.accountService.currentUser$.subscribe(((user: IUser) => {
      if (user) {
        this.currentUser = user;
      }
    }));
  }

}
