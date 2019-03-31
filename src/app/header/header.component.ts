import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  @Output() switchPage = new EventEmitter<String>();

  constructor() {}

  ngOnInit() {}

  goTo(page) {
    this.switchPage.emit(page);
    return false;
  }
}
