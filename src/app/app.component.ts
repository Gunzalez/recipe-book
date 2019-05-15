import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
      firebase.initializeApp({
          apiKey: 'AIzaSyAjHdjclETwTSW12AE0g8FBMKXjWvKHk78',
          authDomain: 'ng-recipe-book-885dd'
      });
  }

}
