import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-profile-stats-info',
  templateUrl: './profile-stats-info.component.html',
  styleUrls: ['./profile-stats-info.component.css']
})
export class ProfileStatsInfoComponent implements OnInit {
  @Input() product: any;
  userPlays: number;

  constructor(private userService: UserService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.paramMap.get("username")).pipe(
      switchMap((user : IUser) => {
        return this.userService.getPlays(user.username) 
      }),
      tap(
        plays => this.userPlays = plays
      )
    ).subscribe();
  }
}
