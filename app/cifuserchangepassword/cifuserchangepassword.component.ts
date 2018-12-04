import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cifuserchangepassword',
  templateUrl: './cifuserchangepassword.component.html',
  styleUrls: ['./cifuserchangepassword.component.css']
})
export class CifuserchangepasswordComponent {
  
  public dateofbirth;
  public NewPassword;
  public ConfirmPassword;
  public ErrorMessage;
  public Message;

  public CheckPasswordPolicy(){

      this.ErrorMessage="Need to do Password Policy..!!!"
  }
  ResetPassword(){
    console.log(this.dateofbirth);
    if(this.dateofbirth=='1994-01-20'){
      if(this.NewPassword==this.ConfirmPassword){
        this.ErrorMessage = "";
        this.Message = "Reset Password functionality..done";
      }
      else{
        this.ErrorMessage = "New Password and Confirm Password are mismatched..!!";
      }
    }
    else{
      this.Message = "";
      this.ErrorMessage = "Failed: Invalid birthdate";
    }
  }

}
