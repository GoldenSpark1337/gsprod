import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrack } from '../../models/track';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'gs-list-card-template',
  templateUrl: './list-card-template.component.html',
  styleUrls: ['./list-card-template.component.css']
})
export class ListCardTemplateComponent implements OnInit {
  tracks$: Observable<ITrack[]> = this.trackService.getTracks();
  constructor(private trackService: TrackService) { }

  ngOnInit() {
  }

}
