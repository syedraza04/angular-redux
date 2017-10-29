import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyDt0Z8o5vzGpJ2eX9pVcnXgwILquP2VwF0",
        authDomain: "ng-recipe-book-b1ee0.firebaseapp.com"
    });
  }
}
