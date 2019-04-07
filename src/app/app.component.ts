import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageToShow = 'recipes';

  setPage(page) {
    this.pageToShow = page;
  }
}
