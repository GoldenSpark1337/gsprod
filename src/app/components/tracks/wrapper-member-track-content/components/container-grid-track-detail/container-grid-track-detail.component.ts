import { Component, Input, OnInit } from '@angular/core';
import { ITrack } from 'src/app/shared/models/track';

@Component({
  selector: 'gs-container-grid-track-detail',
  templateUrl: './container-grid-track-detail.component.html',
  styleUrls: ['./container-grid-track-detail.component.css']
})
export class ContainerGridTrackDetailComponent implements OnInit {
  @Input() track: ITrack;
  constructor() { }

  ngOnInit(): void {
  }
}
