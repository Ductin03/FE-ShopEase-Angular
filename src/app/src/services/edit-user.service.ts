import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  private apiUrl = 'http://localhost:5052/api/admin/Users';
  private apiUrlRole='http://localhost:5052/api/admin/Roles'

  constructor(private http: HttpClient) {}

  editUser(userId: string, userData: any): Observable<any> {
    const headers=new HttpHeaders({'content-type':'application/json'});

    return this.http.patch<any>(`${this.apiUrl}/${userId}`, userData,{headers});
  }
  getUserByid(userId: string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
  getRole():Observable<any>{
    return this.http.get<any>(this.apiUrlRole);
  }

}

