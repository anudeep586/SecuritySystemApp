import { Component, OnInit } from '@angular/core';
import { CredentialserviceService } from "../credentialservice.service";
import {Credential} from "../credential";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-viewcredential',
  templateUrl: './viewcredential.component.html',
  styleUrls: ['./viewcredential.component.css']
})
export class ViewcredentialComponent implements OnInit {
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
 
  gotolist(){
    console.log("go back");
    this._route.navigate(['credential']);
  }

}
