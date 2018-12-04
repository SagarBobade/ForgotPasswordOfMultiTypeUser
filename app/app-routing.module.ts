import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import { CifuserchangepasswordComponent } from './cifuserchangepassword/cifuserchangepassword.component';

const routes: Routes = [
  {path:'forgotpassword', component : ForgotpasswordComponent},
  {path:'', component : LoginpageComponent},
  {path:'login', component : LoginpageComponent},
  {path:'cifuserchangepassword', component : CifuserchangepasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
