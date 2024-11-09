import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5052/api/admin/Users';
  constructor(private http: HttpClient) { }
  getUsers(req: any): Observable<any> {

    return this.http.get(this.apiUrl, { params: req })
  }
  removeUsers(userId:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
