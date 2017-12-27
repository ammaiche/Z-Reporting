import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl : './signIn.component.html'
})
export class SignInComponent implements OnInit{

   myForm: FormGroup;

  ngOnInit(): void {

    this.myForm = new FormGroup({
      email : new FormControl('', [Validators.email, Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
}
