import { Component, OnInit } from '@angular/core';
import { CredentialserviceService } from "../credentialservice.service";
import {Router} from "@angular/router";
import {NgForm} from '@angular/forms';
import {Credential} from "../credential";
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-credentiallist',
  templateUrl: './credentiallist.component.html',
  styleUrls: ['./credentiallist.component.css']
})
export class CredentiallistComponent implements OnInit {
  credential=new Credential();

  constructor(private _service:CredentialserviceService,private _route:Router) { }

  ngOnInit(): void {
  }
  adduserformsubmit(){
    this._service.addcredentialToRemote(this.credential).subscribe(
      data=>{
        console.log("data added successfully");
        this._route.navigate(['credential'])
      },
      error=>console.log("error")
      
    )

  }
  gotologin(){
    this._route.navigate(['/home'])
  }
  gotolist(){
    console.log("go back");
    this._route.navigate(['credential']);
  }

}
