import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor( private http : HttpClient) { }

  sellProperty(data:any):Observable<any>{
    // console.log(data);
    return <Observable<any>> this.http.post('http://localhost:3000/user/sell',data)

  }
}
