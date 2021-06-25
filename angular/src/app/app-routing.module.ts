import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentiallistComponent } from './credentiallist/credentiallist.component';
import { BanklockerComponent } from './banklocker/banklocker.component';
import { CredentialComponent } from './credential/credential.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { MedialockerComponent } from './medialocker/medialocker.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewcredentialComponent } from './viewcredential/viewcredential.component';
import { EditcredentialComponent } from './editcredential/editcredential.component';
import { AddnewbanklockerComponent } from './addnewbanklocker/addnewbanklocker.component';
import { EditbanklockerComponent } from './editbanklocker/editbanklocker.component';
import { ViewbanklockerComponent } from './viewbanklocker/viewbanklocker.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'credentials',component:CredentialComponent},
  {path:'banklocker',component:BanklockerComponent},
  {path:'medialocker',component:MedialockerComponent},
  {path:'home',component:LoginsuccessComponent},
  {path:'addnewCredential',component:CredentiallistComponent},
  {path:'viewCredential',component:ViewcredentialComponent},
  {path:'viewCredential/:id',component:ViewcredentialComponent},
  {path:'credential',component:CredentialComponent},
  {path:'editCredential',component:EditcredentialComponent},
  {path:'editCredential/:id',component:EditcredentialComponent},
  {path:'addnewBank',component:AddnewbanklockerComponent},
  {path:'tobanklocker',component:BanklockerComponent},
  {path:'editbank',component:EditbanklockerComponent},
  {path:'editbank/:valutId',component:EditbanklockerComponent},
  {path:'viewbank',component:ViewbanklockerComponent},
  {path:'viewbank/:valutId',component:ViewbanklockerComponent},
  {path:'tobanklockerafterdelete',component:LoginsuccessComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
