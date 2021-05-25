import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formRegister = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    confirmPassword: ['', [Validators.required]],
    acceptTerms: [false, Validators.requiredTrue]//show selected checkbox
  })

  ngOnInit(): void {
  }
  onResetForm(){
    this.formRegister.reset();
  }
  onSubmit(){
    console.warn(this.formRegister.value);
    this.onResetForm();
  }
  get firstName(){
    return this.formRegister.get('firstName');
  }
  get password(){
    return this.formRegister.get('password');
  }
  get confirmPassword(){
    return this.formRegister.get('confirmPassword');
  }

}
