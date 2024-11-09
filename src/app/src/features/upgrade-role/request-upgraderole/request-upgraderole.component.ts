import { Component, inject } from '@angular/core';
import { RequestUpgraderoleService } from '../../../services/request-upgraderole.service';
import { GetRolesService } from '../../../services/get-roles.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TokenService } from '../../../interceptors/http.service';
import { EditUserService } from '../../../services/edit-user.service';

@Component({
  selector: 'app-request-upgraderole',
  standalone: true,
  imports: [FormsModule,SharedModule],
  templateUrl: './request-upgraderole.component.html',
  styleUrl: './request-upgraderole.component.scss'
})
export class RequestUpgraderoleComponent {
  private requestUpgrade=inject(RequestUpgraderoleService);
  private getRole=inject(GetRolesService);
  private getUserIdToken=inject(TokenService);
  private getUser=inject(EditUserService)
  userId:string='';
  roleId:string='';
  data:any;

  ngOnInit(){
    this.getRoles();
    this.userId=this.getUserIdToken.getUserIdToken();  
    this.getRoleByUser();
  }

  getRoleByUser(){
    this.getUser.getUserByid(this.userId).subscribe({
      next:(res)=>{
        console.log(res);
        this.roleId=res.roleId
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  getRoles(){
    this.getRole.getRoles().subscribe({
      next:(res)=>{     
        this.data=res;
      },
      error:(err)=>{
        console.log(err);       
      }
    })
  }

  onSubmit(){
    debugger
    this.requestUpgrade.RequestUpgrade(this.roleId).subscribe({
      next:(res)=>{
        console.log(res);  
      },
      error:(err)=>{
        console.log(err);        
      }
    })
  }

}
