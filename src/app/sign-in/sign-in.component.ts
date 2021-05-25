import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formSign = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formSign.value);
  }
  get username(){
    return this.formSign.get('username');
  }
  get password(){
    return this.formSign.get('password');
  }
}
