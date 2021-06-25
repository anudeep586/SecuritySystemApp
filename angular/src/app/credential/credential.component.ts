import { Component, OnInit } from '@angular/core';
import { CredentialserviceService } from "../credentialservice.service";
import {Credential} from "../credential";
import {Router} from "@angular/router";


@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.css']
})
export class CredentialComponent implements OnInit {
 

 public x:any;
  constructor(private _service:CredentialserviceService,private _route:Router) { }

  ngOnInit(){
    /**
     * name
     */

    this._service.fetchCredentiallistfromRemote().subscribe(
      (      data: any) =>{ this.x=data;
      console.log(this.x);},
      error =>  console.log("exception occured")
      
    )

  }
  gotoAddCredential(){
    this._route.navigate(["/addnewCredential"]);
  }
  gotoEditCredential(id:number){
    console.log("id"+id);
    this._route.navigate(["/editCredential",id]);

  }
  gotoViewCredential(id:number){
    console.log("id"+id);
    this._route.navigate(["/viewCredential",id]);
  }
  gotologin(){
    this._route.navigate(['/home'])
  }
  get totalRows(): number {
    return this.x.length;
  }
  deleteCredential(id:number){
    this._service.deletecredentialByRemote(id).subscribe(
      data=>{
        console.debug("deleted successfully");
        this._route.navigate(["/home"]); 
      },
      error=>{
        return console.log("exception occured");
      }
      )

  }

}
