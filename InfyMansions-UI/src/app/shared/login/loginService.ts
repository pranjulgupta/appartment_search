import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL = "http://localhost:3000/user/login";

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    
    return <Observable<any>> this.http.post(this.loginURL,data);
  }
}
