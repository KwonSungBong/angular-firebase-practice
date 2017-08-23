import { Component, OnInit, Inject, Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseApp } from "angularfire2";

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  private _messaging: firebase.messaging.Messaging;

  constructor(
    @Inject(FirebaseApp) private _firebaseApp: firebase.app.App
  ) {
    this._messaging = firebase.messaging(this._firebaseApp);
    this._messaging.requestPermission()
      .then((data) => {console.log(data)})
      .catch((error) => {console.log(error)});
  }

  ngOnInit() {
  }

}

//https://stackoverflow.com/questions/40460240/how-to-instantiate-firebase-cloud-messaging-in-angular2
