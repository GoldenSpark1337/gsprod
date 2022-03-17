import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/components/player-wrapper/services/player-service.service';

@Component({
  selector: 'gs-player-play',
  templateUrl: './player-play.component.html',
  styleUrls: ['./player-play.component.css']
})
export class PlayerPlayComponent implements OnInit {
  isPlaying: boolean = false;
  player: any;
  play(track: any) {
    this.service.playTrack(track);
  }
  constructor(private service: PlayerService) {
    
  }

  ngOnInit(): void {
    
    this.player = this.service.player; 
  }

}
