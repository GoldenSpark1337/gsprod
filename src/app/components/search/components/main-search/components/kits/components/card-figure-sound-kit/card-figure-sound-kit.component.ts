import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'gs-card-figure-sound-kit',
  templateUrl: './card-figure-sound-kit.component.html',
  styleUrls: ['./card-figure-sound-kit.component.css']
})
export class CardFigureSoundKitComponent implements OnInit {
  @Input() kit: IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
