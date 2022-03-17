import { Component, HostListener, OnInit, ViewEncapsulation } from "@angular/core";
import { IUser } from "./shared/models/user";
import { AccountService } from "./shared/services/account.service";

@Component({
  selector: "gs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title:string = "gspark";

  play: boolean = false; // TODO: make service for player 
  constructor(private userService: AccountService) {

  }

  ngOnInit(): void {
    this.setCurrentUser()
  }

  setCurrentUser() {
    const user: IUser = JSON.parse(localStorage.getItem("user"));
    this.userService.setCurrentUser(user);
  }

  @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        let element = document.querySelector(".gs-header") as HTMLElement;
        if (window.pageYOffset > 550) {
            element.classList.add('small-top-nav');
        } else {
            element.classList.remove('small-top-nav');
        }
    }
}