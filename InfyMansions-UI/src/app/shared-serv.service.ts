import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServService {

  prop:string;

  static viewdetpara
  constructor() { }


  getDescription(pid){
    this.prop=pid;
  }

  sendProperty(){
    return this.prop;
  }

}
