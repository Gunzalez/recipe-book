import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  pageToShow: String = "recipes";

  setpage(page) {
    this.pageToShow = page;
  }
}
