import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorMessage:String;
  successData:String[];
  constructor(private service:HomeService,private router:Router) { }

  ngOnInit() {
  }

  // searchView(){
  //   this.service.serachLoc().subscribe(
  //     resp=>{
  //       this.successData=resp
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

  buy(){
    this.router.navigate(['/buy'])
  }
}
