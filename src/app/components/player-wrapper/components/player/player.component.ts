import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ITrack } from 'src/app/shared/models/track';
import { SelectedTrackService } from 'src/app/shared/services/selected-track.service';
import { PlayerService } from '../../services/player-service.service';

@Component({
  selector: 'gs-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @ViewChild('player', {static: true}) player: ElementRef;
  track: ITrack;

  constructor(private playerService: PlayerService, private selectedTrack : SelectedTrackService) {
  }

  ngOnInit(): void {
    this.loadPlayer(this.player);
    this.loadTrack();
  }

  loadPlayer(player: any) {
    this.playerService.loadPlayer(player);
  }

  loadTrack() {
    this.selectedTrack.getTrack().subscribe(track => {
      if (track) {
        this.track = track;
      }
    });
  }
}