import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminURL = "http://localhost:3000/user/admin";
  deleteURL= "http://localhost:3000/user/deleteuser/";
  delURL= "http://localhost:3000/user/deleteprop/";
  adminPropURL= "http://localhost:3000/user/admin/property";
  buyerURL="http://localhost:3000/user/admin/buyer";
  sellerURL="http://localhost:3000/user/admin/seller";
  constructor(private http: HttpClient) { }

  regUser(): Observable<any> {
    return <Observable<any>> this.http.get(this.adminURL);
  }

  delUser(userId): Observable<any> {
    return <Observable<any>> this.http.delete(this.deleteURL+userId);
  }

  buyer(): Observable<any> {
    return <Observable<any>> this.http.get(this.buyerURL);
  }

  seller(): Observable<any> {
    return <Observable<any>> this.http.get(this.sellerURL);
  }

  propData(): Observable<any> {
    return <Observable<any>> this.http.get(this.adminPropURL);
  }

  delProp(propId): Observable<any> {
    return <Observable<any>> this.http.delete(this.delURL+propId);
  }
}
