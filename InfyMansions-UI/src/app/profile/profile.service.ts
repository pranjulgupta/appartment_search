import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url="http://localhost:3000/user/properties/"

  constructor(private http:HttpClient) { }
  getProfile(email){
    // console.log(email);
    return this.http.get("http://localhost:3000/user/profile/"+email)
  }
  getProperties(userId):Observable<any[]>{
    return <Observable<any[]>>this.http.get(this.url+userId)



  }

}










// loginURL = "http://localhost:3000/user/login";

// constructor(private http: HttpClient) { }

// login(data: any): Observable<any> {
//   console.log(data);
//   return <Observable<any>> this.http.post(this.loginURL,data);
// }
// }