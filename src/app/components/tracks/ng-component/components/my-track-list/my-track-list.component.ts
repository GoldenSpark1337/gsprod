import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PlayerService } from 'src/app/components/player-wrapper/services/player-service.service';
import { ITrack } from 'src/app/shared/models/track';
import { AccountService } from 'src/app/shared/services/account.service';
import { SelectedTrackService } from 'src/app/shared/services/selected-track.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-my-track-list',
  templateUrl: './my-track-list.component.html',
  styleUrls: [
    '../../../../../shared/modules/track-list/track-list.component.css',
    './my-track-list.component.css']
})
export class MyTrackListComponent implements OnInit {
  @Input() isDraft: boolean;
  tracks$: Observable<ITrack[]> = this.accountService.currentUser$.pipe(
    switchMap((user) => {
      return this.userService.getTracks(user.username, this.isDraft);
    })
  );
  isPlaying$: Observable<boolean> = this.playerService.isPlaying$;
  selectedTrack$: Observable<ITrack> = this.selectedTrack.getTrack();

  constructor(
    private accountService: AccountService, 
    private userService: UserService,
    private playerService: PlayerService, 
    private selectedTrack: SelectedTrackService) { }

  ngOnInit() {
  }

  play(track: ITrack) {
    let isPLaying = false;
    this.isPlaying$.subscribe(res => isPLaying = res);
    if (!isPLaying) {
      this.selectedTrack.loadTrack(track);
      this.playerService.playTrack();
    } else {
      this.playerService.onPause();
    }
  }
}
