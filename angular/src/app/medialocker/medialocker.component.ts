import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MediaService } from '../media.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medialocker',
  templateUrl: './medialocker.component.html',
  styleUrls: ['./medialocker.component.css']
})
export class MedialockerComponent implements OnInit {
  @ViewChild("fileUpload", { static: false })
  fileUpload!: ElementRef;files  = [] as any;  
    fileName:string="";
 
    public x:any;
  constructor(private mediaService:MediaService,private _router :Router) { }


  ngOnInit(){
    /**
     * name
     */

    this.mediaService.fetchCredentiallistfromRemote().subscribe(
      (      data: any) =>{ this.x=data;
      console.log(this.x);},
      error =>  console.log("exception occured")
      
    )

  }
  get totalRows(): number {
    return this.x.length;
  }

  onClick() {  
    const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
    for (let index = 0; index < fileUpload.files.length; index++)  
    {  
     const file = fileUpload.files[index];  
      this.fileName = file.name +" is uploaded"
     
     this.files.push({ data: file, inProgress: false, progress: 0});  
    }  
      this.uploadFiles();  
    };  
    fileUpload.click();  
}
private uploadFiles() {  
  this.fileUpload.nativeElement.value = '';  
  this.files.forEach((file: any) => {  
    this.uploadFile(file);  
  });  
}
uploadFile(file: any) {  
  const formData = new FormData();  
  formData.append('file', file.data);  
  file.inProgress = true;  
  this.mediaService.upload(formData).subscribe(
    rsp => {
      console.log(rsp.type)


     
},
    error => {
      console.log(error)
    });

}

gotologin(){
  this._router.navigate(['/login'])
}
gotoAdmin(){
  this._router.navigate(['/admin'])
}
gotologin1(){
  this._router.navigate(['/home'])
}

}
