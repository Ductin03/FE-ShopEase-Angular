import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EditUserService } from '../../../services/edit-user.service';
import { UserService } from '../../../services/user.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { log } from 'console';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule, RouterModule, SharedModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  checked = false;
  userId: string = '';
  username: string = '';
  roleId: string = '';
  email: string = '';
  Password: string = '';
  roles: any;
  private editUserServices = inject(EditUserService)
  private route = inject(ActivatedRoute)

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getUser();
    this.getRole();

  }
  getRole() {
    this.editUserServices.getRole().subscribe({
      next: (res) => {
        this.roles = res;
        console.log(this.roles);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  getUser() {
    this.editUserServices.getUserByid(this.userId).subscribe({
      next: (res) => {
        this.roleId = res.roleId,
          this.email = res.email
        console.log(res);



      },
      error: (err) => {
        console.log(err);

      }
    })
  }


  onSubmit() {
    const updatedUserData = {
      roleId: this.roleId,
      email: this.email
    };
    console.log(updatedUserData);
    this.editUserServices.editUser(this.userId, updatedUserData).subscribe(response => {
      console.log('User updated successfully', response);
      // Có thể điều hướng đến trang khác hoặc hiển thị thông báo thành công
    }, error => {
      console.error('Error updating user', error);
      // Hiển thị thông báo lỗi cho người dùng
    });
  }


}
