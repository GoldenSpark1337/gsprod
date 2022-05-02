import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatSlider, MatSliderChange } from '@angular/material/slider';
import { PlayerService } from 'src/app/components/player-wrapper/services/player-service.service';

@Component({
  selector: 'gs-player-volume-action',
  templateUrl: './player-volume-action.component.html',
  styleUrls: ['./player-volume-action.component.css']
})
export class PlayerVolumeActionComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSlider) slider!: MatSlider;
  isVolume: boolean;
  
  constructor(private playerService: PlayerService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isVolume = true;
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  onVolumeChange(event: MatSliderChange) {
    this.playerService.setVolume(event.value / 100);
  }

  switchVolume() {
    this.isVolume = !this.isVolume;
    if (!this.isVolume) {
      this.slider.value = 0;
    } else {
      this.slider.value = 50;
    }
    this.playerService.setVolume(this.slider.value / 100);
  }
}
