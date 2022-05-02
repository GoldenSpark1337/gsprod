import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/components/player-wrapper/services/player-service.service';
import { ITrack } from '../../models/track';
import { SelectedTrackService } from '../../services/selected-track.service';

@Component({
  selector: 'gs-button-play-item',
  templateUrl: './button-play-item.component.html',
  styleUrls: ['./button-play-item.component.css']
})
export class ButtonPlayItemComponent implements OnInit {
  @Input() isList: boolean;
  @Input() track: ITrack;
  isPlaying: boolean;
  constructor(private playerService: PlayerService, private selectedTrack: SelectedTrackService) { }

  ngOnInit() {
  }

  play() {
    if (this.track) {
      this.selectedTrack.loadTrack(this.track);
      this.playerService.playTrack();
    }
  }
}
