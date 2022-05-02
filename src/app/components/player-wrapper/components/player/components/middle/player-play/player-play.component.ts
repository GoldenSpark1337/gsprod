import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/components/player-wrapper/services/player-service.service';

@Component({
  selector: 'gs-player-play',
  templateUrl: './player-play.component.html',
  styleUrls: ['./player-play.component.css']
})
export class PlayerPlayComponent implements OnInit {
  isPlaying: boolean = false;
  
  constructor(private playerService: PlayerService) {
    
  }

  ngOnInit(): void {
    this.playerService.isPlaying$.subscribe(res => this.isPlaying = res);
  }

  play() {
    this.playerService.playTrack();
  }

  pause() {
    this.playerService.onPause();
  }
}
