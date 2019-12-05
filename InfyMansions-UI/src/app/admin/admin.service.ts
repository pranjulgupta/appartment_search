import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminURL = "http://localhost:3000/user/admin";
  constructor(private http: HttpClient) { }

  regUser(): Observable<any> {
    return <Observable<any>> this.http.get(this.adminURL);
  }

  delUser(userId): Observable<any> {
    return <Observable<any>> this.http.delete(this.adminURL+userId);
  }
}
