import { Component, inject } from '@angular/core';
import { EditCategoryService } from '../../../services/edit-category.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss'
})
export class EditCategoryComponent {
  categoryId:string='';
  categoryName:string='';
  description:string='';
  private editCategoryService=inject(EditCategoryService);
  private route=inject(ActivatedRoute)
  ngOnInit(){
    this.categoryId=this.route.snapshot.paramMap.get('id');
    console.log(this.categoryId);
    this.getCategoryById();
    
  }
  getCategoryById(){
    this.editCategoryService.getCategoryById(this.categoryId).subscribe({
      next:(res)=>{
        console.log(res);
        this.categoryName=res.categoryName,
        this.description=res.description
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  editSubmit(){
    this.editCategoryService.editCategory(this.categoryName,this.description,this.categoryId).subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }

    })
  }
}
