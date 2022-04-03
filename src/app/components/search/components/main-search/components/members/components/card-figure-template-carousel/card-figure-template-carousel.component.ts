import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gs-card-figure-template-carousel',
  templateUrl: './card-figure-template-carousel.component.html',
  styleUrls: ['./card-figure-template-carousel.component.css']
})
export class CardFigureTemplateCarouselComponent implements OnInit {
  @Input() product: any; 
  constructor() { }

  ngOnInit(): void {
  }

}
