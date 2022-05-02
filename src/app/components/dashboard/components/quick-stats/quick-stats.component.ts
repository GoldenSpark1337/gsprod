import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gs-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.css']
})
export class QuickStatsComponent implements OnInit {
  periodsList: string[] = [
    "Бүгін", "Кеше", "Осы апта", "Соңғы 14 күн", "Соңғы 30 күн", "Соңғы 60 күн", "Соңғы 90 күн"
  ]
  
  period: string = this.periodsList[0];

  constructor() { }

  ngOnInit(): void {
  }

  check() {
    console.log(this.period)
  }
}
