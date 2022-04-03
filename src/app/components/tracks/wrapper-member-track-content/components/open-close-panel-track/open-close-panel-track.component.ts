import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-open-close-panel-track',
  templateUrl: './open-close-panel-track.component.html',
  styleUrls: ['./open-close-panel-track.component.css']
})
export class OpenClosePanelTrackComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
