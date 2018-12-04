import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CifuserchangepasswordComponent } from './cifuserchangepassword/cifuserchangepassword.component';


@NgModule({
  declarations: [
    AppComponent,
    ForgotpasswordComponent,
    LoginpageComponent,
    CifuserchangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
