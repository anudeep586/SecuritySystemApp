import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../bank';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-viewbanklocker',
  templateUrl: './viewbanklocker.component.html',
  styleUrls: ['./viewbanklocker.component.css']
})
export class ViewbanklockerComponent implements OnInit {

  bank=new Bank();

  constructor(private _service:BankserviceService,private _route:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let valutId = parseInt(this._activatedRoute.snapshot.paramMap.get('valutId') || '{}');
     this._service.addbankToRemoteEdit(valutId).subscribe(
       data=>{
         console.log("data recieved");
         this.bank=data;
       },
       error=>console.log("exception occured")
       
   )
   
     }
     gotologin(){
      this._route.navigate(['/home'])
    }
 
  gotolist(){
    console.log("go back");
    this._route.navigate(['tobanklocker']);
  }

}
