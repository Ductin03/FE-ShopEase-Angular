import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = false;
  constructor() { }
  
  open() {
    this.isLoading = true;
  }
  close(){
    this.isLoading = false;
  }
}
