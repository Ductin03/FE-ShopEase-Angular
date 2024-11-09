import { Component, inject } from '@angular/core';
import { IconService } from '@ant-design/icons-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GetProductService } from './get-product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EditOutline } from '@ant-design/icons-angular/icons';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-get-product',
  standalone: true,
  imports: [ NgxDatatableModule,FormsModule,SharedModule,RouterModule],
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.scss'
})
export class GetProductComponent {

  iconService = inject(IconService);

  filter = {
    keyword: '',
    pageIndex: 0,
    pageSize: 5
  }
  data: any;
  private productService = inject(GetProductService);
  private router = inject(Router)
  private route=inject(ActivatedRoute)

  ngOnInit(): void {
    this.iconService.addIcon(...[
      EditOutline
    ])


    

    this.fetchUserPaginations();
  }

  public handlePageChange($event: any) {
    console.log($event.offset);
    this.filter.pageIndex = $event.offset;
    this.fetchUserPaginations();
  }

  public handleSearch() {
    this.filter.pageIndex = 0
    this.fetchUserPaginations();
  }


  private fetchUserPaginations() {
    this.productService.getProduct(this.filter)
      .subscribe(res => {
        console.log(res)
        this.data = res;
      }, err => {
        if (err.status == 403) {
          alert('Session is expired. please Login again')
          this.router.navigateByUrl('/login')
        }
      })
  }
  changeStatus(userId:string){
    this.productService.removeProduct(userId).subscribe({
      next:(res)=>{
        console.log("Success");
        this.fetchUserPaginations();
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
 
}


