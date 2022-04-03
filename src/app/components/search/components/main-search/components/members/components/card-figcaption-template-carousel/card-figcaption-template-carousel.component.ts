import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-card-figcaption-template-carousel',
  templateUrl: './card-figcaption-template-carousel.component.html',
  styleUrls: ['./card-figcaption-template-carousel.component.css']
})
export class CardFigcaptionTemplateCarouselComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
