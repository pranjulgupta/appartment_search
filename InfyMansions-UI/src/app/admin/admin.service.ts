import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminURL = "http://localhost:3000/user/admin";
  delUserURL= "http://localhost:3000/user/deleteuser/";
  delPropURL= "http://localhost:3000/user/deleteprop/";
  adminPropURL= "http://localhost:3000/user/admin/property";
  buyerURL="http://localhost:3000/user/admin/buyer";
  sellerURL="http://localhost:3000/user/admin/seller";
  constructor(private http: HttpClient) { }

  regUser(): Observable<any> {
    return <Observable<any>> this.http.get(this.adminURL);
  }
  delUser(userId): Observable<any> {
    return <Observable<any>> this.http.delete(this.delUserURL+userId);
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
    // console
    return <Observable<any>> this.http.delete(this.delPropURL+propId);
  }
}
