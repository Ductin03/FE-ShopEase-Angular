import { Component, inject } from '@angular/core';
import { EditProductService } from './edit-product.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { GetCategoriesService } from '../../../services/get-categories.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule,SharedModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  productId:string='';
  productName:string='';
  description: string='';
  categoryId:string='';
  quantity:number=0;
  price:number=0;
  data:any;
  private editProductService=inject(EditProductService)
  private category=inject(GetCategoriesService)
  private route=inject(ActivatedRoute)
  ngOnInit(){
    this.productId=this.route.snapshot.paramMap.get('id');
    this.getProductById();
    this.getCategory();
  }
  getCategory(){
    this.category.getAllCategories().subscribe({
      next:(res)=>{
        this.data=res,
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  getProductById(){
    this.editProductService.getProductById(this.productId).subscribe({
      next:(res)=>{
        console.log(res);
        this.productId=res.productId,
        this.categoryId=res.categoryId,
        this.description=res.description,
        this.price=res.price,
        this.productName=res.categoryName,
        this.productName=res.productName,
        this.quantity=res.quantity
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
 
  onSubmit(){
    const body={
      productName:this.productName,
      description:this.description,
      categoryId:this.categoryId,
      quantity:this.quantity,
      price:this.price
    };
    console.log(body);
    
    this.editProductService.editProduct(this.productId,body).subscribe({
      next:(res)=>{
        alert("Edit Success");
      },
      error:(err)=>{
        console.log(err);      
      }
    })
  
  }

  

}
