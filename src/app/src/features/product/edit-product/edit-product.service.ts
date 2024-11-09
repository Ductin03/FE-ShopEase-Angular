import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  private apiUrl='http://localhost:5052/api/admin/Products'
  constructor(private htpp:HttpClient) { }
  editProduct(productId:string,productData:any):Observable<any>{

    const headers=new HttpHeaders({'Content-type':'application/json'});

    return this.htpp.patch<any>(`${this.apiUrl}/${productId}`, productData,{headers})
  }
  getProductById(productId:string):Observable<any>{
    return this.htpp.get<any>(`${this.apiUrl}/${productId}`);
  }
}
