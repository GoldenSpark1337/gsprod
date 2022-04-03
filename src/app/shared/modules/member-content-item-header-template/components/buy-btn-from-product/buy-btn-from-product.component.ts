import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-buy-btn-from-product',
  templateUrl: './buy-btn-from-product.component.html',
  styleUrls: ['./buy-btn-from-product.component.css']
})
export class BuyBtnFromProductComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
