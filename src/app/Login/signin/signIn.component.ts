import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  templateUrl : './signIn.component.html'
})
export class SignInComponent implements OnInit{

  constructor(private loginService: LoginService, private router : Router){

  }
  myForm: FormGroup;
  userNotExist  = false;

  ngOnInit(): void {

    this.myForm = new FormGroup({
      email : new FormControl('', [Validators.email, Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }

  login() : void{

    const user: User = {
      firstName : '',
      lastName : '',
      currentProject : '',
      email : this.myForm.get('email').value,
      password : this.myForm.get('password').value
    };

    this.loginService.login(user).subscribe((value : User)=>{

      if(value){
          this.loginService.currentUser = value;
          this.router.navigateByUrl('/home');
      }else{
        this.userNotExist = true;
      }
    });
  }

}
