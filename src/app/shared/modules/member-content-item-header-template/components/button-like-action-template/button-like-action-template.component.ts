import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ILike } from 'src/app/shared/models/like';
import { IProduct } from 'src/app/shared/models/product';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'gs-button-like-action-template',
  templateUrl: './button-like-action-template.component.html',
  styleUrls: ['./button-like-action-template.component.css']
})
export class ButtonLikeActionTemplateComponent implements OnInit {
  @Input() product: IProduct;
  @Input() users: ILike[];
  currentUser: IUser;
  iconActivated: boolean;
  productLikes: number;
  constructor(private productService: ProductService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getLikes();
    this.getUser();
  }

  getUser() {
    this.accountService.currentUser$.subscribe(user => this.currentUser = user);
  }

  addLike() {
    this.productService.likeProduct(this.product.id).subscribe(
      res => this.iconActivated = true
    );
  }

  getLikes() {
    this.productService.getLikes(this.product.id).subscribe(
      (likes: ILike[]) => {
        this.productLikes = likes.length;
        this.users = likes;
        likes.forEach(user => {
          console.log(user)
          if (user.username == this.currentUser.username) {
            this.iconActivated = true;
          }
        });
      }
    );
  }
}
