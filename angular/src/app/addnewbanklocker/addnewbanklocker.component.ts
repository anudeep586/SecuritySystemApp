import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankserviceService } from '../bankservice.service';
import {Bank} from '../bank';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addnewbanklocker',
  templateUrl: './addnewbanklocker.component.html',
  styleUrls: ['./addnewbanklocker.component.css']
})
export class AddnewbanklockerComponent implements OnInit {

  

  bank =new Bank();

  constructor(private _service:BankserviceService,private _route:Router) { }

  ngOnInit(): void {
  }
  adduserbankformsubmit(){
    this._service.addbankToRemote(this.bank).subscribe(
      data=>{
        console.log("data added successfully");
        this._route.navigate(['tobanklocker'])
      },
      error=>console.log("error")
      
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