import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player-service.service';

@Component({
  selector: 'gs-player-progress-bar',
  templateUrl: './player-progress-bar.component.html',
  styleUrls: ['./player-progress-bar.component.css']
})
export class PlayerProgressBarComponent implements OnInit {
  currentProgress$: any;
  currentTime$: any;
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.checkCurrentTime();
  }

  checkCurrentTime() {
    this.playerService.onTimeUpdate();
    this.currentProgress$ = this.playerService.currentProgress$;
    this.currentProgress$.subscribe(res => console.log(res))
    this.currentTime$ = this.playerService.currentTime$;
  }

  updateCurrentTime(event) {
    this.playerService.onTimeUpdate();
  }
}
