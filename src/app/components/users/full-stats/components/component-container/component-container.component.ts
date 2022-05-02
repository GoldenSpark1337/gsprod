import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-component-container',
  templateUrl: './component-container.component.html',
  styleUrls: [
    '../../../../dashboard/components/quick-stats/quick-stats.component.css',
    './component-container.component.css',
    ]
})
export class ComponentContainerComponent implements OnInit {
  periodsList: string[] = [
    "Бүгін", "Кеше", "Осы апта", "Соңғы 14 күн", "Соңғы 30 күн", "Соңғы 60 күн", "Соңғы 90 күн"
  ]

  period: string = this.periodsList[0];

  // NgxChart options
  view: any[] = [1300, 275];
  showXAxis = true;
  showYAxis = true;
  data: any[] = [
    {
      "name": "March, 12",
      "value": "4"
    },
    {
      "name": "March, 13",
      "value": "2"
    },
    {
      "name": "March, 14",
      "value": "0"
    },
    {
      "name": "March, 15",
      "value": "1"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
