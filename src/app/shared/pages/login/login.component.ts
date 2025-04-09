import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private _auth:AuthService, private _router:Router) { }
  loginForm: FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.email,Validators.required]),
  })
  btnSubmit() {
    console.log(this.loginForm.value);
    this._auth.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.message === "success") {
            localStorage.setItem('SocialToken', res.token);
            this._router.navigate(['/posts'])
             console.log(res.message);
      }
        
      }, error: (err) => {
        console.log(err.error.error);
        
    }
  })
  }
}
