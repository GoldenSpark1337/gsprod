import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ICart, ICartTotals } from 'src/app/shared/models/cart';
import { IOrder } from 'src/app/shared/models/order';
import { CartService } from 'src/app/shared/services/cart.service';
import { CheckouttService } from 'src/app/shared/services/checkout.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$: Observable<ICart>;
  cartTotal$: Observable<ICartTotals>;
  public groupedItems: any = {};

  constructor(private cartService: CartService, private checkoutService: CheckouttService, private snackBar: MatSnackBar,
    private userService: UserService) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
    this.cartTotal$ = this.cartService.cartTotal$;
    this.groupItems();
    console.log(this.groupedItems);
  }

  groupItems() {
    this.cart$.subscribe(cart => {
        cart.items.forEach((item) => {
          if (!this.groupedItems[item.user]) {
            this.groupedItems[item.user] = [];
          }
          this.groupedItems[item.user].push(item);
        });
      })
  }

  submitOrder() {
    const cart = this.cartService.getCurrentCart();
    const orderToCreate = this.getOrderToCreate(cart);
    //this.cartService.createPaymentIntent().subscribe(res => console.log("PaymentIntentSuccesss"), error => console.log(error));
    this.checkoutService.createOrder(orderToCreate).subscribe((order: IOrder) => {
      this.openSnackBar("Order created successfully");
      this.cartService.deleteLocalCart(cart.id);
    }, error => {
      this.openSnackBar(error.message);
      console.log(error);
    });
  }

  openPaymentDialog() {

  }

  private getOrderToCreate(cart: ICart) {
    return {
      basketId: cart.id
    }
  }

  private openSnackBar(message: string) {
    let config = new MatSnackBarConfig;
    config.duration = 5000;
    this.snackBar.open(message, "OK", config)
  }
}
