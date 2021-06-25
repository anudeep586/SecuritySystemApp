import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Credential} from "./credential";

@Injectable({
  providedIn: 'root'
})
export class CredentialserviceService {

  constructor(private _http:HttpClient) { }

  fetchCredentiallistfromRemote():Observable<any>{

    return this._http.get<any>("http://localhost:8080/getcredentiallist");

}
addcredentialToRemote(credential : Credential):Observable<any>{
  return this._http.post<any>("http://localhost:8080/addcredential",credential);
}

addcredentialToRemoteEdit(id : number):Observable<any>{
  return this._http.get<any>("http://localhost:8080/getcredentialbyid/"+id);

}
deletecredentialByRemote(id : number):Observable<any>{
  return this._http.delete<any>("http://localhost:8080/deletecredentialbyid/"+id);

}
}
