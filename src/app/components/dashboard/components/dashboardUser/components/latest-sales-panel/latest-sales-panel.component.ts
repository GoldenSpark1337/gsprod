import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-latest-sales-panel',
  templateUrl: './latest-sales-panel.component.html',
  styleUrls: ['./latest-sales-panel.component.css']
})
export class LatestSalesPanelComponent implements OnInit {
  salesList: any;
  constructor() { }

  ngOnInit(): void {
  }

}
