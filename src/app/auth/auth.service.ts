import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(email: string, password: string) {
      console.log(email, password);
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(error => {
              console.log(error);
          });
  }
}
