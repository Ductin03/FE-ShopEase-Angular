import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { error } from 'console';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private route = inject(Router)

  private loadingService = inject(LoadingService);
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    this.loadingService.open();
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${token}`)
      });
      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = "An Know error ocurred!"
          switch (error.status) {
            case 403:
              this.route.navigateByUrl('/not-found')
              break;
          }
          return throwError(errorMessage);
        }),
        finalize(() => {
          this.loadingService.close();
        })

      )
    }
    return next.handle(req);
  }
  getUserIdToken(): string | null {
    try {

      const decodedToken: any = jwtDecode(localStorage.getItem('token'));

      return decodedToken?.nameid || null
    } catch (error) {
      console.error("Token không hợp lệ hoặc không tồn tại");
      return null;
    }
  }
  getRolename(): string | null {
    try {
      const decodedToken: any = jwtDecode(localStorage.getItem('token'));
      return decodedToken?.RoleName || null;
    } catch (error) {
      console.error("Token không hợp lệ hoặc không tồn tại");
      return null;

    }
  }
  getEmailFromToken(): string | null {

    try {
      const decodedToken: any = jwtDecode(localStorage.getItem('token'));
      return decodedToken?.email || null;
    } catch (error) {

      console.error("Token không hợp lệ hoặc không tồn tại");
      return null;

    }

  }


}
