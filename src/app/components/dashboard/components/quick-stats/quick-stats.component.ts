import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gs-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.css']
})
export class QuickStatsComponent implements OnInit {
  periodsList: string[] = [
    "Today", "Yesterday", "This Week", "This Month", "Last 7 Days", "Last 14 Days", "Last 30 Days", "Last 60 Days", "Last 90 Days"
  ]
  
  period: string = this.periodsList[0];

  constructor() { }

  ngOnInit(): void {
  }

  check() {
    console.log(this.period)
  }
}
