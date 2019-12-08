import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  adminURL = "http://localhost:3000/user/search";
  constructor(private http:HttpClient) { }

  serachLoc(): Observable <any> {
    return <Observable<any>> this.http.get(this.adminURL);
  }
}
