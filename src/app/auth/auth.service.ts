import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    token: string;

    constructor(private router: Router) { }

    register(email: string, password: string) {
          firebase.auth().createUserWithEmailAndPassword(email, password)
              .catch(error => {
                  console.log(error);
              });
    }

    signIn(email: string, password: string) {
          firebase.auth().signInWithEmailAndPassword(email, password)
              .then(response => {
                  this.router.navigate(['recipes']);
                  firebase.auth().currentUser.getIdToken()
                      .then((token: string) => {
                          this.token = token;
                      });
              })
              .catch(error => {
                  console.log(error);
              });
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
                this.token = token;
            });
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut()
            .catch(error => {
                console.log(error);
            });
        this.token = null;
    }
}
