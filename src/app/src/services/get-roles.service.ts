import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRolesService {
  private apiUrl='http://localhost:5052/api/admin/Roles'
  constructor(private http:HttpClient) { }
  getRoles():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
