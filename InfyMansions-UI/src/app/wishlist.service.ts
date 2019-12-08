import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  getWishList(userId:String):Observable<any>{
    console.log(userId,"varamo")
     
     return this.http.get<any>("http://localhost:3000/user/wishList"+userId)
      
  }
}
