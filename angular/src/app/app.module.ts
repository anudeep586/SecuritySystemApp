import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { CredentialComponent } from './credential/credential.component';
import { BanklockerComponent } from './banklocker/banklocker.component';
import { MedialockerComponent } from './medialocker/medialocker.component';
import { CredentiallistComponent } from './credentiallist/credentiallist.component';
import { ViewcredentialComponent } from './viewcredential/viewcredential.component';
import { EditcredentialComponent } from './editcredential/editcredential.component';
import { AddnewbanklockerComponent } from './addnewbanklocker/addnewbanklocker.component';
import { EditbanklockerComponent } from './editbanklocker/editbanklocker.component';
import { ViewbanklockerComponent } from './viewbanklocker/viewbanklocker.component';
import { AdminComponent } from './admin/admin.component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    CredentialComponent,
    BanklockerComponent,
    MedialockerComponent,
    CredentiallistComponent,
    ViewcredentialComponent,
    EditcredentialComponent,
    AddnewbanklockerComponent,
    EditbanklockerComponent,
    ViewbanklockerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
