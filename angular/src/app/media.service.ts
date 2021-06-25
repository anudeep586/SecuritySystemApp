import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private httpClient:HttpClient) { }
  SERVER_URL: string = "http://localhost:8080/upload"; 
  fetchCredentiallistfromRemote():Observable<any>{

    return this.httpClient.get<any>("http://localhost:8080/files");

} 

  public upload(formData: any) {
    console.log("upload service function is called")
    console.log(formData)
    return this.httpClient.post<FormData>(this.SERVER_URL, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }
}
