import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpropertyService {
loginURL="http://localhost:3000/user/buy";

  constructor(private http:HttpClient) { }
//  buy():Observable<any> {
//     return <Observable<any>> this.http.get(this.loginURL);
//   }
//   filterBuy(data):Observable<any>{
//     return <Observable<any>> this.http.post(this.loginURL,data);
//   }

getPropertyDetail(): Observable<any> {
  // console.log(77)
  // console.log(this.http.get<any>("http://localhost:3000/user/buy"))
  return this.http.get<any>("http://localhost:3000/user/buy");
}



getList(userId:string):Observable<string[]>{
  return this.http.get<string[]>("http://localhost:3000/user/wishlist/" + userId);
}
 
addToList(data:object):Observable<object>{
  return this.http.put<object>("http://localhost:3000/user/add/wishlist",data);
}
deleteFromList(data:object):Observable<object>{
  return this.http.put<object>("http://localhost:3000/user/remove/wishlist",data);
}
  
}

