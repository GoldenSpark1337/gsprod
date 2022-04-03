import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITrack } from 'src/app/shared/models/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'gs-wrapper-member-track-content',
  templateUrl: './wrapper-member-track-content.component.html',
  styleUrls: ['./wrapper-member-track-content.component.css']
})
export class WrapperMemberTrackContentComponent implements OnInit {
  track: ITrack;
  constructor(private trackService: TrackService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadTrack();
  }

  loadTrack() {
    this.trackService.getTrack(+this.route.snapshot.paramMap.get("id")).subscribe(track => {
      this.track = track;
    }, error => console.log(error)
    );
  }
}
