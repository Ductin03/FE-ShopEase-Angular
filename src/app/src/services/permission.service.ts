import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private apiUrl='http://localhost:5052/api/admin/Roles/get-permission';
  private apiUrlPermission='http://localhost:5052/api/admin/Roles/create-role-permision';
  private apiUrlRolePermission='http://localhost:5052/api/admin/Roles/get-rolePerrmisson';
  
  constructor(private http:HttpClient) { }
  getPermission():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
  createRolePermission(data:any):Observable<any>{
    const headers=new HttpHeaders({'content-type':'application/json'});
    return this.http.post<any>(this.apiUrlPermission,data,{headers})
  }
  getRolePermission():Observable<any>{
    return this.http.get<any>(this.apiUrlRolePermission);
  }
}
