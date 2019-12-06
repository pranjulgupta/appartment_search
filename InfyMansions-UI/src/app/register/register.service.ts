import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerURL = "http://localhost:3000/user/register";

  constructor(private http: HttpClient) { }
  
  register(data: any): Observable<any> {
    console.log(data);
    return <Observable<any>> this.http.post(this.registerURL,data);
  }
}
