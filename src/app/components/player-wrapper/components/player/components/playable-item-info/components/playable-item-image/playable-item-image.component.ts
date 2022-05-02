import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-playable-item-image',
  templateUrl: './playable-item-image.component.html',
  styleUrls: ['./playable-item-image.component.css']
})
export class PlayableItemImageComponent implements OnInit {
  @Input() image: string;
  constructor() { }

  ngOnInit(): void {
  }

}
