import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestUpgraderoleService {
  private apiUrl='http://localhost:5052/api/admin/Users/upgradeRole'
  constructor(private http:HttpClient) { }
  RequestUpgrade(roleId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { roleId };
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
