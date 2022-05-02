import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart, ICartItem } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/shared/services/cart.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { IUser } from 'src/app/shared/models/user';
import { MatDialog } from '@angular/material/dialog';
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';

@Component({
  selector: 'gs-cart-group',
  templateUrl: './cart-group.component.html',
  styleUrls: ['./cart-group.component.css']
})
export class CartGroupComponent implements OnInit {
  @Input() item: any;
  @Input() group: any;
  cart$: Observable<ICart>; 
  cart: ICart;
  user: IUser;

  constructor(private cartService: CartService, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.cart$ = this.cartService.cart$;
    this.cart = this.cartService.getCurrentCart();
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.group.key).subscribe(user => this.user = user);
  }

  removeItemFromCart(item: ICartItem) {
    this.cartService.removeItemFromCart(item);
  }

  opewReview() {
    this.dialog.open(ReviewDialogComponent, {
      data: {
        user: this.user,
        item: this.item,
      },
    });
  }
  }

