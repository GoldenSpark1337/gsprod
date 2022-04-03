import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gs-card-figcaption-template',
  templateUrl: './card-figcaption-template.component.html',
  styleUrls: ['./card-figcaption-template.component.css']
})
export class CardFigcaptionTemplateComponent implements OnInit {
  @Input() product!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
