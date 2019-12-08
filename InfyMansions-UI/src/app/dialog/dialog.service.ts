import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private http : HttpClient) { }
  getUserById(userId : String): Observable<any>{
    return this.http.get<any>("http://localhost:3000/user/find/"+userId)
  }
}
