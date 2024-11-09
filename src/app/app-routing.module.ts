// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./src/features/default/dashboard/dashboard.component').then(c=>c.DefaultComponent)
      },
      {
        path: 'admin/users',
        loadComponent: () => import('./src/features/user/get-user/user.component').then(c => c.UserComponent)
      },
      {
        path: 'admin/products',
        loadComponent: () => import('./src/features/product/get-product/get-product.component').then(c=>c.GetProductComponent)
      },
      {
        path: 'products/create',
        loadComponent: () => import('./src/features/product/create-product/create-product.component').then(c=>c.CreateProductComponent)
      }, 
      {
        path: 'products/edit/:id',
        loadComponent: () => import('./src/features/product/edit-product/edit-product.component').then(c=>c.EditProductComponent)
      }, 
      {
        path: 'admin/categories',
        loadComponent: () => import('./src/features/category/get-categories/get-categories.component').then(c=>c.GetCategoriesComponent)
      }, 
      {
        path: 'admin/upgradeRole',
        loadComponent: () => import('./src/features/upgrade-role/approved-role/approved-role.component').then(c=>c.ApprovedRoleComponent)
      },
      {
        path: 'admin/roles',
        loadComponent: () => import('./src/features/roles/get-roles/get-roles.component').then(c=>c.GetRolesComponent)
      },
      {
        path: 'category/create',
        loadComponent: () => import('./src/features/category/create-category/create-category.component').then(c=>c.CreateCategoryComponent)
      },
      {
        path: 'category/edit/:id',
        loadComponent: () => import('./src/features/category/edit-category/edit-category.component').then(c=>c.EditCategoryComponent)
      },
      {
        path: 'user/upgradeRole',
        loadComponent: () => import('./src/features/upgrade-role/request-upgraderole/request-upgraderole.component').then(c=>c.RequestUpgraderoleComponent)
      },
      {
        path: 'admin/permission',
        loadComponent: () => import('./src/features/role-permission/permission/permission.component').then(c=>c.PermissionComponent)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./src/features/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./src/features/user/register/register.component')
      },
      {
        path: 'edit-user/:userId',
        loadComponent: () => import('./src/features/user/edit-user/edit-user.component').then(m=>m.EditUserComponent)
      },
      {
        path: 'not-found',
        loadComponent: () => import('./src/features/not-found404/not-found/not-found.component').then(m=>m.NotFoundComponent)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
