import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ITrack } from 'src/app/shared/models/track';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { TrackService } from 'src/app/shared/services/track.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  user$ : Observable<IUser> = this.accountService.currentUser$.pipe(
    switchMap(user => this.userService.getUser(user.username))
  );
  tracks$: Observable<ITrack[]> = this.user$.pipe(
    switchMap(user => this.userService.getFavourite(user.id)),
    switchMap(tracks => forkJoin(
      tracks.map(t => this.trackService.getTrack(t.id))
    ))
  );

  constructor(
    private userService: UserService, 
    private trackService: TrackService, 
    private accountService: AccountService) { }

  async ngOnInit() {
  }
}

