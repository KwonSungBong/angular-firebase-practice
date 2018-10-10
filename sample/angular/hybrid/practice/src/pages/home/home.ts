import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: Observable<firebase.User>;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signIn() {
    const email="rnjstjdqhd39@naver.com";
    const password="rnjstjdqhd39@";

    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
