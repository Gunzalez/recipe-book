import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageToShow = 'shopping-list';

  setPage(page) {
    this.pageToShow = page;
  }
}
