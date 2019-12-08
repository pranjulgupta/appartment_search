import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  url="http://localhost:3000/user/wishlistProperties/"
  url1="http://localhost:3000/user/wishProp"

  constructor( private http :HttpClient) { }
  getwishProperties(userId):Observable <any[]>{
    return <Observable<any[]>>this.http.get(this.url+userId)



  }



  getWishlistPropertis():Observable<any>{
   
      
      return <Observable<any[]>>this.http.get(this.url1)
      
    
  }
}
