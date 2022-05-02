import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/components/player-wrapper/services/player-service.service';
import { ITrack } from '../../models/track';
import { SelectedTrackService } from '../../services/selected-track.service';

@Component({
  selector: 'gs-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  @Input() tracks$: Observable<ITrack[]>;
  isPlaying$: Observable<boolean> = this.playerService.isPlaying$;
  selectedTrack$: Observable<ITrack> = this.selectedTrack.getTrack();
  constructor(private playerService: PlayerService, private selectedTrack: SelectedTrackService) { }

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
