import { Component, OnInit } from '@angular/core';
import { SharedServService } from '../shared-serv.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
a;
  constructor(private activatedRoute:ActivatedRoute, private service:ViewService,private gd:SharedServService) { }


  propertyId:string;
  prop;
data;
features:any[]


  ngOnInit() {
    // this.a=SharedServService.viewdetpara;
    // console.log(this.a);
  //   this.activatedRoute.paramMap.subscribe(params => {
  //     console.log(params["params"].query,121)
  //     this.propertyId = params["params"].query
  //   })

  //   this.service.getView(this.propertyId).subscribe(
  //     (data) => {
  //       console.log(data,7878)
  //       this.prop = data;
  //     }, 
  //     (failure) => {
  //       console.log(failure,4)
  //     }
  //   )


  this.data=this.gd.sendProperty();
  console.log(this.data);


  }
}
