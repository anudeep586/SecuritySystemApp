import { Component, OnInit } from '@angular/core';
import { CredentialserviceService } from "../credentialservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from '@angular/forms';
import {Credential} from "../credential";
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-editcredential',
  templateUrl: './editcredential.component.html',
  styleUrls: ['./editcredential.component.css']
})
export class EditcredentialComponent implements OnInit {

  credential=new Credential();

  constructor(private _service:CredentialserviceService,private _route:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
 let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id') || '{}');
  this._service.addcredentialToRemoteEdit(id).subscribe(
    data=>{
      console.log("data recieved");
      this.credential=data;
    },
    error=>console.log("exception occured")
    
  )

  }
  gotologin(){
    this._route.navigate(['/home'])
  }
  updateuserformsubmit(){
    this._service.addcredentialToRemote(this.credential).subscribe(
      data=>{
        console.log("data added successfully");
        this._route.navigate(['credential'])
      },
      error=>console.log("error")
      
    )

  }
  gotolist(){
    console.log("go back");
    this._route.navigate(['credential']);
  }

}
