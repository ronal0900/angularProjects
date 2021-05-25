import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  constructor() { }

  emailAddress = new FormControl('', [Validators.required, Validators.pattern(/@?[hotmail|gmail|hotmail|outlook|yahoo].com?/)]);

  ngOnInit(): void {
  }
  onReset(){
    this.emailAddress.reset();
  }
  onSubmit(){
    console.log(this.emailAddress.value);
    this.onReset();
  }

}
