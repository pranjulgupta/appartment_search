import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  errorMessage:String;
  successMessage:String[];
  constructor(private service:AdminService) { }

  ngOnInit() {
    this.regView();
  }

  regView(){
    this.service.regUser().subscribe(
      resp=>{
        this.successMessage=resp
      },
      err=>{
        this.errorMessage=err.error.message
      }
    )
  }

  deleteReg(userId){
    this.service.delUser(userId).subscribe(
      resp=>{
        this.successMessage=resp
        this.regView();
      },
      err=>{
        this.errorMessage=err.error.message
      }
    )
  }



}
