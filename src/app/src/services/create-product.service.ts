import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {
  private apiUrl='http://localhost:5052/api/admin/Products'
  constructor(private http:HttpClient) { }
  addProduct(productName:string,description:string,categoryId:string,quantity,price:number,isDeleted:boolean):Observable<any>{
    const body={productName,description,categoryId,quantity,price,isDeleted}
    console.log(body);
    
    const headers= new HttpHeaders({'Content-type':'application/json'});
    return this.http.post(this.apiUrl,body,{headers});
  }
}
