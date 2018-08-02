import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, Errors } from '../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSubmitting = false;
  authForm: FormGroup;
  errors: Errors;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  submitForm() {
    const credentials = this.authForm.value;

    this.userService
      .attemptAuth(credentials)
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
