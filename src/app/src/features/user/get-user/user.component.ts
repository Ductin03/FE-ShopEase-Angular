import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { OnInit } from '@angular/core';
import { error, log } from 'console';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { JsonPipe } from '@angular/common';
import { IconService } from '@ant-design/icons-angular';
import { DeleteOutline, EditOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgxDatatableModule,
    SharedModule,
    JsonPipe,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  iconService = inject(IconService);

  filter = {
    keyword: '',
    pageIndex: 0,
    pageSize: 5
  }
  data: any;
  private userService = inject(UserService);
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
    this.userService.getUsers(this.filter)
      .subscribe(res => {
        console.log(res)
        this.data = res;
      }, err => {
        if (err.status == 403) {
          this.router.navigateByUrl('/login')      
          alert('Session is expired. please Login again')
          
          
        }
      })
  }
  changeStatus(userId: string) {
    this.userService.removeUsers(userId).subscribe(
      res => {
        console.log("Remove Success");
        
        this.fetchUserPaginations(); 
      },
      error => {
        console.error("Error removing user:", error);
      }
    )}
}
