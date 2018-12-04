import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent  {

 
  public EmployeeCode;
  public ErrorMessage;
  public validMessage;

 constructor(private router: Router){}

  public verify(){
    if((this.EmployeeCode==null)||(this.EmployeeCode==undefined)){
      this.ErrorMessage = "Please Enter Employee Code"
    }
    else{
      if(((this.EmployeeCode.trim())=="")||(this.EmployeeCode==undefined)){
        this.ErrorMessage = "Please Enter valid Employee Code";
      }
      else if(this.EmployeeCode=="30405"){
        this.ErrorMessage = "";
          this.validMessage = "Valid Employee Code : Redirecting to Change Password URL No : 1"
      }
      else if((this.EmployeeCode=="IA9922167797")||(this.EmployeeCode=="ia9922167797")){
        this.ErrorMessage = "";
          this.validMessage = "Valid Employee Code : Redirecting to Change Password URL No : 2"
      }
      else if((this.EmployeeCode=="CIF9922167797")||(this.EmployeeCode=="cif9922167797")){
        this.ErrorMessage = "";
        this.router.navigate(['/cifuserchangepassword']);        
      }
      else{
        this.validMessage = ""; 
        this.ErrorMessage = "User does not exists";
      }

      }
    }
  }

