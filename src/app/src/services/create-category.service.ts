import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateCategoryService {
  private apiUrl='http://localhost:5052/api/admin/Categories'
  constructor(private http:HttpClient) { }
  createCategory(categoryName:string,description:string):Observable<any>{
    const body={categoryName,description}
    const headers= new HttpHeaders({'content-type':'application/json'})
    return this.http.post<any>(this.apiUrl,body,{headers});
  }
}
