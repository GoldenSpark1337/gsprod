import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PlayerService } from '../../services/player-service.service';

@Component({
  selector: 'gs-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  constructor(private renderer: Renderer2) {
  }
}