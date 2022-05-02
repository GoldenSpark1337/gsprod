import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'gs-btn-buy-from-template',
  templateUrl: './btn-buy-from-template.component.html',
  styleUrls: ['./btn-buy-from-template.component.css']
})
export class BtnBuyFromTemplateComponent implements OnInit {
  @Input() product?: any;
  inCart$: Observable<boolean>;
  
  constructor(private cartService: CartService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cartService.findInCart(this.product?.id);
    this.inCart$ =  this.cartService.inCart$;
  }

  addItemToCart() {
    this.cartService.addItemToCart(this.product);
  }

  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 8000;
    this.snackBar.open("Item is already in cart!", "OK", config)
  }
}
