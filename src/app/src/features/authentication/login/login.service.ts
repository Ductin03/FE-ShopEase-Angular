import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl='http://localhost:5052/api/admin/Login';

  constructor(private http:HttpClient) {

   }

  Login(username:string,password:string):Observable<any>{

    const body={username,password};
    console.log(body);
    const headers=new HttpHeaders({'content-type':'application/json'});
    return this.http.post<any>(this.apiUrl,body,{headers});
    
  }
}
