import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Bank} from "./bank";


@Injectable({
  providedIn: 'root'
})
export class BankserviceService {
  

  constructor(private _http:HttpClient) { }
  
  fetchBanklistfromRemote():Observable<any>{

    return this._http.get<any>("http://localhost:8080/bank");

}

addbankToRemote(bank : Bank):Observable<any>{
  return this._http.post<any>("http://localhost:8080/bankinfosave",bank);
}
addbankToRemoteEdit(valutId : number):Observable<any>{
  return this._http.get<any>("http://localhost:8080/bankinfobyid/"+valutId);

}
deletebankByRemote(valutId : number):Observable<any>{
  return this._http.delete<any>("http://localhost:8080/bankinfodelete/"+valutId);

}
}
