import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {
  private apiUrl='http://localhost:5052/api/admin/Categories'
  constructor(private http:HttpClient) { }
  getAllCategories():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
