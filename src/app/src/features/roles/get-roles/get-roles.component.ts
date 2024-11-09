import { Component, inject } from '@angular/core';
import { GetRolesService } from '../../../services/get-roles.service';
import { error, log } from 'console';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { IconModule, IconService } from '@ant-design/icons-angular';
import { EditOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-get-roles',
  standalone: true,
  imports: [NgxDatatableModule,SharedModule,IconModule],
  templateUrl: './get-roles.component.html',
  styleUrl: './get-roles.component.scss'
})
export class GetRolesComponent {
  data:any;
  private getRoleService=inject(GetRolesService)
  iconService = inject(IconService);
  ngOnInit(){
    this.iconService.addIcon(...[
      EditOutline
    ])
    this.getAllRoles();
  }
  getAllRoles(){
    this.getRoleService.getRoles().subscribe({
      next:(res)=>{
        console.log(res);
        this.data=res;
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

}
