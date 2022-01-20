import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  gross: number = 0;
  discount: number = 0;
  total: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
