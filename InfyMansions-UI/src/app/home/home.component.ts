import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '../../../node_modules/@angular/router';
import { SharedServService } from '../shared-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorMessage:String;

  successData:String[];
  constructor(private service:HomeService,private router:Router ,  private gd:SharedServService) { }

  ngOnInit() {
    this.service.serachLoc().subscribe(
      resp=>{
        this.successData=resp
        // console.log(this.successData)
      },
      err=>{
        this.errorMessage=err
        // this.errorMessage=err.error.message
      }
    )
  }

  // searchView(area){
   
  //   this.service.serachLoc().subscribe(
  //     resp=>{
  //       this.successData=resp
  //       console.log(this.successData)
  //     },
  //     err=>{
  //       this.errorMessage=err.error.message
  //     }
  //   )
  // }

  down(event,value:string){
    if(event.key==="Enter"){
      sessionStorage.setItem("PreviousUrl","/home");
      sessionStorage.setItem("search",value.toString());
      this.router.navigate(['/buy']);
    }
  }

  buy(area){
    this.gd.getArea(area);
  //  console.log(area)
   if(area){
    this.router.navigate(['/buy'])
   }
   
  }
}