  // angular import
  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';
  import { RouterModule } from '@angular/router';
  import { LoginService } from './login.service';
  import { Router } from '@angular/router';


  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterModule,FormsModule,HttpClientModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers:[LoginService]
  })
  export default class LoginComponent {
    username:string='';
    password:string='';
      // public method
      SignInOptions = [
        {
          image: 'assets/images/authentication/google.svg',
          name: 'Google'
        },
        {
          image: 'assets/images/authentication/twitter.svg',
          name: 'Twitter'
        },
        {
          image: 'assets/images/authentication/facebook.svg',
          name: 'Facebook'
        }
      ];
    constructor(private loginService: LoginService,private router:Router){

    }
    onClick(){
      this.loginService.Login(this.username,this.password).subscribe({
          next:(res)=>{
            localStorage.setItem('token',res.token);
            this.router.navigateByUrl('/dashboard/default') 
          },
          error:(error)=>{
            alert('Sai username hoặc password')
            console.log("Login Failed: ",error);
          }
      })
    }
  }
