import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-playable-item-subtitle',
  templateUrl: './playable-item-subtitle.component.html',
  styleUrls: ['./playable-item-subtitle.component.css']
})
export class PlayableItemSubtitleComponent implements OnInit {
  @Input() user: string;
  @Input() plays: number;
  constructor() { }

  ngOnInit(): void {
  }

}
