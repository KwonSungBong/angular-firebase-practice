import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.user = afAuth.authState;
  }

  join() {
    const email="rnjstjdqhd39@naver.com";
    const password="rnjstjdqhd39@";

    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  }

  login() {
    const email="rnjstjdqhd39@naver.com";
    const password="rnjstjdqhd39@";

    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  sendPasswordResetEmail() {
    const email="rnjstjdqhd39@naver.com";

    this.afAuth.auth.sendPasswordResetEmail(email).catch(function(error) {
      console.log(error);
    });
  }

}
