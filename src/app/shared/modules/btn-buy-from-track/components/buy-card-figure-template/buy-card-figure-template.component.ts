import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-buy-card-figure-template',
  templateUrl: './buy-card-figure-template.component.html',
  styleUrls: ['./buy-card-figure-template.component.css']
})
export class BuyCardFigureTemplateComponent implements OnInit {
  inCart: boolean = false; //TODO create service
  constructor() { }

  ngOnInit(): void {
  }

}
