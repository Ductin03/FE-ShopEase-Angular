import { Component, inject } from '@angular/core';
import { GetCategoriesService } from '../../../services/get-categories.service';
import { error } from 'console';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { IconService } from '@ant-design/icons-angular';
import { EditOutline } from '@ant-design/icons-angular/icons';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-categories',
  standalone: true,
  imports: [NgxDatatableModule,SharedModule,RouterModule,FormsModule],
  templateUrl: './get-categories.component.html',
  styleUrl: './get-categories.component.scss'
})
export class GetCategoriesComponent {
  iconService = inject(IconService);
  private getCategoryServices=inject(GetCategoriesService);
  private router=inject(Router)
  data:any;
  ngOnInit():void{
    this.iconService.addIcon(...[
      EditOutline
    ])
    this.getData();
  }
  getData()
  {
    this.getCategoryServices.getAllCategories().subscribe({
      next:(res)=>{ 
        
        this.data=res;
        console.log('Data content:', this.data); // Xem nội dung mảng
      console.log('Is array:', Array.isArray(this.data));
      console.log(res);
        
      },
      error:(error)=>{
        if(error.status==403){
          alert('vui long dang nhap')
          this.router.navigateByUrl('/login');
        }
        console.log(error);
        
      }
    })
    
  }

}
