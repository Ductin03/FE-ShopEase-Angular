import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovedRoleService {
  private apiUrl='http://localhost:5052/api/admin/Users/getRequestRole';
  private apiUrlApproved='http://localhost:5052/api/admin/Users/upgradeRole';
  constructor(private http:HttpClient) { }
  UpgradeRole(requestId :string):Observable<any>{
    return this.http.patch<any>(`${this.apiUrlApproved}/${requestId}`,null)
  }
  getAllRequestRole():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
