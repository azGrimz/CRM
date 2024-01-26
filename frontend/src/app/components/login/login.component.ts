import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-auth.service';
import { HomeScreenComponent } from '../../pages/home-screen/home-screen.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  loginForm: FormGroup;
  error = ' ';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  get f() {
    return this.loginForm.controls;
  }

  clearError() {
    this.error = '';
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .login(this.loginForm.value)
      .pipe()
      .subscribe({
        next: () => {
          this.router.navigate(["homescreen"])
        },
        error: (error) => {
          if (error.status === 401) {
            this.error = 'Usuário ou senha inválidos'
          }
        },
      });
  }

}
