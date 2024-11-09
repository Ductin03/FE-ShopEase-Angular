// angular import
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  // public method
  SignUpOptions = [
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
  username:string='';
  password:string='';
  email:string='';
  roleId:string='';
    private registerServices=inject(RegisterService);
    private router=inject(Router)
    onClick(){
      this.registerServices.Register(this.username,this.password,this.email,this.roleId).subscribe({
        next:(res)=>{
          if(res){
            alert("Thêm thành công user");              
          }         
        },
        error:(error)=>{
          if(error.status==500)
          alert('Thông tin không hợp lệ');
          
        }
      })

    }
}
