import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

    @ViewChild('form') myForm: NgForm;

    constructor(private authService: AuthService) {}

    ngOnInit() {}

    onSubmit() {
        this.authService.register(this.myForm.value.email, this.myForm.value.password);
        this.myForm.reset();
    }

}
