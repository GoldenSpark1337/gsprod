import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-quick-stats-panels',
  templateUrl: './quick-stats-panels.component.html',
  styleUrls: ['./quick-stats-panels.component.css']
})
export class QuickStatsPanelsComponent implements OnInit {

  totalNetSale: number = 0;
  followers: number = 0;
  negotitations: number = 0;
  activeCampaigns: number = 0;
  plays: number = 0;
  reposts: number = 0;
  comments: number = 0;
  freeDownloads: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
