import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent  {
  
  public EmployeeCode;
  public Password;
  public Message;
  public ErrorMessage;

  public Login(){
    if((this.EmployeeCode==null || this.EmployeeCode==undefined)||(this.Password==null||this.Password==undefined)){
      this.ErrorMessage = "Please fill both fields..!!!";
      this.Message="";
    }
    else{
      this.ErrorMessage="";
    this.Message = "Login functionality";
      }
    }

  public Register(){
    this.ErrorMessage="";
     this.Message = "Registration functionality";
       }
}
