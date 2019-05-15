import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor() { }

    register(email: string, password: string) {
          firebase.auth().createUserWithEmailAndPassword(email, password)
              .catch(error => {
                  console.log(error);
              });
    }

    signIn(email: string, password: string) {
          firebase.auth().signInWithEmailAndPassword(email, password)
              .then(response => {
                  console.log(response);
              })
              .catch(error => {
                  console.log(error);
              });
    }
}
