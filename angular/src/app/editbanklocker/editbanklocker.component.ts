import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';
import {Bank} from '../bank';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editbanklocker',
  templateUrl: './editbanklocker.component.html',
  styleUrls: ['./editbanklocker.component.css']
})
export class EditbanklockerComponent implements OnInit {
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
  updateuserbankformsubmit(){
    this._service.addbankToRemote(this.bank).subscribe(
      data=>{
        console.log("data added successfully");
        this._route.navigate(['tobanklocker'])
      },
      error=>console.log("error")
      
    )

  }
  gotolist(){
    console.log("go back");
    this._route.navigate(['tobanklocker']);
  }
  gotologin(){
    this._route.navigate(['/home'])
  }

}

