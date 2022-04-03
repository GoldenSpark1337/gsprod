import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'gs-card-figure-template',
  templateUrl: './card-figure-template.component.html',
  styleUrls: ['./card-figure-template.component.css']
})
export class CardFigureTemplateComponent implements OnInit {
  @Input() product!: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
}
