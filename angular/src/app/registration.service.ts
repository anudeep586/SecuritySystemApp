import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {User} from './user';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  

  constructor(private _http :HttpClient) {}

    public loginUserfromRemote(user :User):Observable<any> {
      return this._http.post<any>("http://localhost:8080/login",user)

      
    }
    
    public registerUserfromRemote(user :User):Observable<any> {
      return this._http.post<any>("http://localhost:8080/registeruser",user);
    }
   
}
