import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'gs-wrapper-buy-license-item',
  templateUrl: './wrapper-buy-license-item.component.html',
  styleUrls: ['./wrapper-buy-license-item.component.css']
})
export class WrapperBuyLicenseItemComponent implements OnInit {
  @Input() product: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addItemToCart(this.product);
  }
}
