import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user=new User();
  msg="";
  

  constructor(private _service : RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }
registerUser(){
  this._service.registerUserfromRemote(this.user).subscribe(
    data =>{ 
      console.log("response recieved");
    this.msg='Registration successful';
    this._router.navigate(['/login'])
  },
    error => {
      console.log("exception occured");
      this.msg="EmailId is already in Use";
}
  )
}
loginUser(){
  this._router.navigate(['/login'])

}
}
