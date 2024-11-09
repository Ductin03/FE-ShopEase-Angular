import { Token } from "@angular/compiler";
import { inject } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { TokenService } from "../../../../src/interceptors/http.service";

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  isVisible?: boolean;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;

}



export const navigationItems = (role): NavigationItem[] => [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        isVisible: role === "Admin" || role === "User",
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'management',
    title: 'Management',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'user-management',
        title: 'User Management',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/users',
        icon: 'user',
        breadcrumbs: false
      },
      {
        id: 'product-management',
        title: 'Product Management',
        type: 'item',
        isVisible: role === "Admin" || role === "User",
        classes: 'nav-item',
        url: '/admin/products',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'category-management',
        title: 'Category Management',
        type: 'item',
        isVisible: role === "Admin" || role === "User",
        classes: 'nav-item',
        url: '/admin/categories',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'role-management',
        title: 'Role Management',
        type: 'item',
        isVisible: role=="Admin",
        classes: 'nav-item',
        url: '/admin/roles',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'request-upgraderole',
        title: 'Request UpgradeRole',
        type: 'item',
        isVisible: role=="User",
        classes: 'nav-item',
        url: '/user/upgradeRole',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'upgraderole-management',
        title: 'UpgradeRole Management',
        type: 'item',
        isVisible: role=="Admin",
        classes: 'nav-item',
        url: '/admin/upgradeRole',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'permission-management',
        title: 'Permission Management',
        type: 'item',
        isVisible: role=="Admin",
        classes: 'nav-item',
        url: '/admin/permission',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        classes: 'nav-item',
        url: '/login',
        icon: 'login',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'register',
        title: 'Add User',
        type: 'item',
        isVisible: role === "Admin",
        classes: 'nav-item',
        url: '/register',
        icon: 'profile',
        target: true,
        breadcrumbs: false
      }
    ]
  }
]
