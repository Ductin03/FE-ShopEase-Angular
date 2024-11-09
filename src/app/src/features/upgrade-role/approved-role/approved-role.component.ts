import { Component, inject } from '@angular/core';
import { ApprovedRoleService } from '../../../services/approved-role.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from '../../../interceptors/http.service';
import { EditUserService } from '../../../services/edit-user.service';

@Component({
  selector: 'app-approved-role',
  standalone: true,
  imports: [SharedModule,NgxDatatableModule],
  templateUrl: './approved-role.component.html',
  styleUrl: './approved-role.component.scss'
})
export class ApprovedRoleComponent {
  private requestRole=inject(ApprovedRoleService)
  private route=inject(ActivatedRoute);

  userId:string='';

  data:any;
  ngOnInit(){
    this.getAllRequestRole();
  }

  Approved(requestId:string){
    this.requestRole.UpgradeRole(requestId).subscribe({
      next:(res)=>{
        this.getAllRequestRole();
        if(res){
          alert("Duyệt quyền thành công")
        }
      },
      error:(err)=>{
        if(err.status==500){
          alert("Quyền đã được duyệt hoặc yêu cầu không hợp lệ")
        }
        
      }
    })
  }
  getAllRequestRole(){
    this.requestRole.getAllRequestRole().subscribe({
      next:(res)=>{
        console.log(res); 
        this.data=res;      
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
