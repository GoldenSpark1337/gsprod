import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-playable-item-title',
  templateUrl: './playable-item-title.component.html',
  styleUrls: ['./playable-item-title.component.css']
})
export class PlayableItemTitleComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
