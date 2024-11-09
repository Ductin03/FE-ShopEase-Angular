import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl='http://localhost:5052/api/admin/Users'

  constructor(private http:HttpClient){}

  Register(username:string,password:string,email:string,roleId:string):Observable<any>{
    const body={username,password,email,roleId};
    const headers= new HttpHeaders({'Content-type':'application/json'});
    return this.http.post<any>(this.apiUrl,body,{headers});
  }
}
