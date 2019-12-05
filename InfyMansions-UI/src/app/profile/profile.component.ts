import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
email:String;
details;
errorMessage;
userId:String;
property;

  constructor(private profileServ:ProfileService) { }

  ngOnInit() {
    this.email=sessionStorage.getItem('emailId')
    this.profileServ.getProfile(this.email).subscribe(
      (res)=>{
        console.log(res);
        
        this.details=res;
      },(error)=>{
        this.errorMessage=error.error.message

      }
    )
    this.userId=sessionStorage.getItem('userId')
    
    this.profileServ.getProperties(this.userId).subscribe(
      (res)=>{
        this.property=res;
      },(error)=>{
        this.errorMessage=error.error.message;
      }
    )

    

  }
  
}
