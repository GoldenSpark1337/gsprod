import { Component, HostListener, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "gs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title:string = "gspark";

  constructor() {

  }

  ngOnInit(): void {
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