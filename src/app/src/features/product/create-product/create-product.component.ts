import { Component, inject } from '@angular/core';
import { CreateProductService } from '../../../services/create-product.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { GetCategoriesService } from '../../../services/get-categories.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule,SharedModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  productName:string='';
  description: string='';
  categoryId:string='';
  quantity:number=0;
  price:number=0;
  data:any;
  isDeleted:boolean;
  private createProductService=inject(CreateProductService)
  private categoryService=inject(GetCategoriesService)
  ngOnInit(){
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res);
        this.data=res;
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
  onClick(){
    this.createProductService.addProduct(this.productName,this.description,this.categoryId,this.quantity,this.price,this.isDeleted).subscribe({
        next:(res)=>{
          if(res){
            alert("Thêm thành công")
          }
        },
        error:(err)=>{
          console.log(err);
          
        }
    })
  }
}
