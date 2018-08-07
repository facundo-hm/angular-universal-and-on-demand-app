import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, Errors } from '../../core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isSubmitting = false;
  signupForm: FormGroup;
  errors: Errors;

  constructor (
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.signupForm = this.fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  submitForm () {
    const credentials = this.signupForm.value;

    this.userService
      .signupAuth(credentials)
      .subscribe(
        user => {
          this.router.navigateByUrl('/' + user)
        },
        err => {
          this.isSubmitting = false;
          this.errors = err;
        }
      );
  }
}
