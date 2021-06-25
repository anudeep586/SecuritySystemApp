import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= new User();
  msg="";

  constructor(private _service : RegistrationService, private _router :Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    if(this.user.userName=="admin" && this.user.password=="admin"){
      this._router.navigate(['/admin'])
    }
    this._service.loginUserfromRemote(this.user).subscribe(
      data =>{ 
        console.log("response recieved");
      this._router.navigate(['/loginsuccess'])
    },
      error => {
        console.log("exception occured");
        this.msg="bad credentials please enter valid email and password";
  }
    )
  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  }

}
