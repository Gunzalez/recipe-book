import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

    @ViewChild('form') myForm: NgForm;

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    onSignIn() {
        this.authService.signIn(this.myForm.value.email, this.myForm.value.password);
        this.myForm.reset();
    }

}
