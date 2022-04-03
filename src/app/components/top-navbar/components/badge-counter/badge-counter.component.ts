import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'gs-badge-counter',
  templateUrl: './badge-counter.component.html',
  styleUrls: ['./badge-counter.component.css']
})
export class BadgeCounterComponent implements OnInit {
  @Input("counter") matBudgeCounter: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
