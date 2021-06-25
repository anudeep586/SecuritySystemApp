import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
// import { BanklockerComponent } from './banklocker/banklocker.component';


@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private _service : RegistrationService, private _router :Router) { }

  ngOnInit(): void {
   
  }
  gotocredentials(){
    this._router.navigate(['/credentials'])
  }
  gotobanklocker(){
    this._router.navigate(['/banklocker'])
  }
  gotomedialocker(){
    this._router.navigate(['/medialocker'])
  }
  gotohome(){
    this._router.navigate(['/home'])
  }
  gotologin(){
    this._router.navigate(['/login'])
  }
  gotoAdmin(){
    this._router.navigate(['/admin'])
  }


}
