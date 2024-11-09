import { Component, inject } from '@angular/core';
import { CreateCategoryService } from '../../../services/create-category.service';
import { log } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss'
})
export class CreateCategoryComponent {
  private createCategoryServices=inject(CreateCategoryService);
  categoryName:string='';
  description:string='';
  addCategory(){
    this.createCategoryServices.createCategory(this.categoryName,this.description).subscribe({
      next:(res)=>{
        if(res){
          alert("Thêm category thành công!")     
        }
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
