import { Component, HostListener, OnInit, ViewEncapsulation } from "@angular/core";
import { IUser } from "./shared/models/user";
import { AccountService } from "./shared/services/account.service";
import { CartService } from "./shared/services/cart.service";

@Component({
  selector: "gs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title:string = "gspark";

  play: boolean = false; // TODO: make service for player 
  constructor(
    private userService: AccountService,
    private cartService: CartService
    ) {

  }

  ngOnInit(): void {
    this.setCurrentUser();
    this.checkCart();
  }

  setCurrentUser() {
    const user: IUser = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.userService.setCurrentUser(user);
    }
  }

  checkCart() {
    const cartId = localStorage.getItem("cart_id");
    if (cartId) {
      this.cartService.getCart(cartId).subscribe((response) => {
        console.log(response);
      }, error => console.log(error));
    }
  }

  @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        let element = document.querySelector("body") as HTMLElement;
        let header = document.querySelector(".gs-header") as HTMLElement;
        if (window.pageYOffset > 550) {
            element.classList.add('small-top-nav');
            header.classList.add('small-top-nav')
        } else {
            element.classList.remove('small-top-nav');
            header.classList.remove('small-top-nav')
        }
    }
}