import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {
  private apiUrl='http://localhost:5052/api/admin/Products';
  constructor(private http:HttpClient) { }
  getProduct(req:any):Observable<any>{
    return this.http.get(this.apiUrl,{params:req});
  }
  removeProduct(productId:string):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${productId}`)
  }
}
