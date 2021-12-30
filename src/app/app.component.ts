import { Component, HostListener, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "gs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title:string = "gspark";

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