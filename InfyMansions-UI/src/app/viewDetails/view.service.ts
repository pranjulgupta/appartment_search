import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http:HttpClient) { }
  getView(id:String):Observable<any>{
    // console.log("http://localhost:3000/user/view"+id+454);
    return this.http.get<any>("http://localhost:3000/user/view"+id);
    
  }
}
