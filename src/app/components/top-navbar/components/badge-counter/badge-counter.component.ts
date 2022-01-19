import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-badge-counter',
  templateUrl: './badge-counter.component.html',
  styleUrls: ['./badge-counter.component.css']
})
export class BadgeCounterComponent implements OnInit {
  @Input("counter") matBudgeCounter: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
