import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-profile-stats-info',
  templateUrl: './profile-stats-info.component.html',
  styleUrls: ['./profile-stats-info.component.css']
})
export class ProfileStatsInfoComponent implements OnInit {
  @Input() product: any;
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
