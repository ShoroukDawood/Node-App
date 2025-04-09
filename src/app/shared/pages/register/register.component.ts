import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,NgIf],
templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  constructor(private _http:AuthService, private _router:Router) { }
  registerForm: FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required]),
    rePassword:new FormControl(null,[Validators.required]),
    dateOfBirth:new FormControl(null,[Validators.required]),
    gender:new FormControl(null,[Validators.required])
  })
  submitForm() {
    console.log(this.registerForm.get('name')?.touched);
    console.log(this.registerForm.get('name')?.errors);
    
    this._http.register(this.registerForm.value).subscribe({
      next: (res) => {
          if (res.message==="success") {
            this._router.navigate(['/login'])
            console.log(res.message);
      }
        
      }, error: () => {
        console.log("failed");
        
      }
    })
  }
}
