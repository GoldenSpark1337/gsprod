import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'gs-player-volume-action',
  templateUrl: './player-volume-action.component.html',
  styleUrls: ['./player-volume-action.component.css']
})
export class PlayerVolumeActionComponent implements OnInit {
  @ViewChild(MatSlider) slider!: MatSlider;
  value: number = 50;
  isVolume: boolean = true;
  changeVolume() {
    this.isVolume = !this.isVolume;
    if (!this.isVolume) {
      this.value = 0;
    } else {
      this.value = 50;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
