import { Component, Input, OnInit } from '@angular/core';
import { ITrack } from 'src/app/shared/models/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'gs-button-play-track',
  templateUrl: './button-play-track.component.html',
  styleUrls: ['./button-play-track.component.css']
})
export class ButtonPlayTrackComponent implements OnInit {
  @Input() trackId;
  track: ITrack;
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.trackService.getTrack(this.trackId).subscribe(track => {
      if (track) {
        this.track = track;
      }
    })
  }

}
