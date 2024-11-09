import { Component, inject } from '@angular/core';
import { PermissionService } from '../../../services/permission.service';
import { log } from 'console';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetRolesService } from '../../../services/get-roles.service';

@Component({
  selector: 'app-permission',
  standalone: true,
  imports: [SharedModule, FormsModule, CommonModule],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss'
})
export class PermissionComponent {
  private permissionServices = inject(PermissionService)
  private roleServices = inject(GetRolesService)
  data: any;
  role: any;
  record: any;
  selectedPermissions: { [roleId: string]: string[] } = {}; /*tạo biến selectedPermissions: để lưu 1 đổi tượng và chứa array key RoleId 
  và : string[] là lưu array string của key RoleId đó, trong đó 1 key roleId tương ứng với 1 array string
*/
  ngOnInit() {
    this.getPermission();
    this.getRole();
    this.getPermissionByRole();
  }
  getPermissionByRole() {
    this.permissionServices.getRolePermission().subscribe({
      next: (res) => {
        this.record = res;
        this.record.map(permisisonRole => {
          const find = Object.keys(this.selectedPermissions).find(x => x == permisisonRole.roleId);
          if (find) {
            this.selectedPermissions[find] = [...this.selectedPermissions[find], permisisonRole.permissionId]
          } else {
            this.selectedPermissions[permisisonRole.roleId] = [permisisonRole.permissionId]
          }
        })
        console.log(this.selectedPermissions)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  isPermissionAssignedToRole(roleId: string, permissionId: string): boolean {
    return this.record?.some((entry: any) => entry.roleId === roleId && entry.permissionId === permissionId);
  }


  getPermission() {
    this.permissionServices.getPermission().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res;

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  getRole() {
    this.roleServices.getRoles().subscribe({
      next: (res) => {
        console.log(res);
        this.role = res;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  onCheckboxChange(roleId: string, permissionId: string, event: Event) {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    if (!this.selectedPermissions[roleId]) {
      this.selectedPermissions[roleId] = [];
    }
    if (isChecked) {
      if (!this.selectedPermissions[roleId].includes(permissionId)) {
        this.selectedPermissions[roleId].push(permissionId);
      }
    } else {
      this.selectedPermissions[roleId] = this.selectedPermissions[roleId].filter(id => id !== permissionId);
    }

    console.log(this.selectedPermissions)
  }

  saveRoles() {
    const rolePermissionData = Object.entries(this.selectedPermissions).map(([roleId, permissions]) => ({
      roleId,
      rolePermissionRequests: permissions.map(permissionId => ({ permissionId }))
    }));
    const dataToSend = { rolePermission: rolePermissionData };
    this.permissionServices.createRolePermission(dataToSend).subscribe({
      next: (res) => {
        alert('Them thanh cong');
      },
      error: (err) => {
        console.error('Error saving Role-Permissions', err);
      }
    });
  }

}


