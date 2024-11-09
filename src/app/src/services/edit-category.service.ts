import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditCategoryService {

  private apiUrl="http://localhost:5052/api/admin/Categories"
  constructor(private http:HttpClient ) { }
  editCategory(categoryName:string,description:string,categoryId:string):Observable<any>{
    const body={categoryName,description};
    const headers=new HttpHeaders({'content-type':'application/json'})
    return this.http.patch<any>(`${this.apiUrl}/${categoryId}`,body,{headers})
  }
  getCategoryById(categoryId:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${categoryId}`)
  }
}
