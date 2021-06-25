import { Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-banklocker',
  templateUrl: './banklocker.component.html',
  styleUrls: ['./banklocker.component.css']
})
export class BanklockerComponent implements OnInit {

  public x:any;
  constructor(private _service:BankserviceService,private _route:Router) { 
  }
 


  ngOnInit(){
    /**
     * name
     */

    this._service.fetchBanklistfromRemote().subscribe(
      (      data: any) =>{ this.x=data;
      console.log(this.x);},
      error =>  console.log("exception occured")
      
    )

}
get totalRows(): number {
  return this.x.length;
}
gotoBankLocker(){
  this._route.navigate(["/addnewBank"]);
}
gotoEditBankLocker(id:String){
  console.log("id"+id);
  this._route.navigate(["/editbank",id]);

}
gotoViewBankLocker(id:String){
  console.log("id"+id);
  this._route.navigate(["/viewbank",id]);
}
gotologin(){
  this._route.navigate(['/home'])
}
deletebank(id:number){
  this._service.deletebankByRemote(id).subscribe(
    data=>{
      console.debug("deleted successfully");
      this._route.navigate(["/tobanklockerafterdelete"]); 
      
    },
    error=>{
      return console.log("exception occured");
    }
    )

}
}
