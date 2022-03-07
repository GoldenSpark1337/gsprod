import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [
    {
        artwork: "https://main.v2.beatstars.com/fit-in/63x63/filters:format(.jpeg):quality(80):fill(000000)/users/prod/224460/i4t70k9rv.jpg",
        title: "Bezerk",
        price: "41.11",
        type: "Track"
      },
      {
        artwork: "https://main.v2.beatstars.com/fit-in/63x63/filters:format(.jpeg):quality(80):fill(000000)/users/prod/224460/i4t70k9rv.jpg",
        title: "Bezerk",
        price: "41.11",
        type: "Track"
      },
      {
        artwork: "https://main.v2.beatstars.com/fit-in/63x63/filters:format(.jpeg):quality(80):fill(000000)/users/prod/224460/i4t70k9rv.jpg",
        title: "Bezerk",
        price: "41.11",
        type: "Track"
      }
  ];
  gross: number = 0;
  discount: number = 0;
  total: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
