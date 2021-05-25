import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  contactForm = this.fb.group({
    name: [''],
    email: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.maxLength(100)]]
  })

  ngOnInit(): void {
  }
  onReset(){
    this.contactForm.reset();
  }
  onSubmit(){
    console.log(this.contactForm.value);
    this.onReset();
  }
  get email(){
    return this.contactForm.get('email');
  }
  get subject(){
    return this.contactForm.get('subject');
  }
  get message(){
    return this.contactForm.get('message');
  }
}
