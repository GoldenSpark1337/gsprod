import { Component, Input, OnInit } from '@angular/core';
import { ITrack } from 'src/app/shared/models/track';

@Component({
  selector: 'gs-playable-item-info',
  templateUrl: './playable-item-info.component.html',
  styleUrls: ['./playable-item-info.component.css']
})
export class PlayableItemInfoComponent implements OnInit {
  @Input() track: ITrack;
  constructor() { }

  ngOnInit(): void {
  }

}
