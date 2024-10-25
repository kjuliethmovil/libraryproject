// src/app/components/layout/aside/aside.component.ts
// Menu with routerLink to navigate between CRUD components

import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  items: MenuItem[]=[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        routerLink: '/users'
      },
      {
        label: 'Books',
        icon: 'pi pi-fw pi-book',
        routerLink: '/books'
      },
      {
        label: 'Transactions',
        icon: 'pi pi-fw pi-exchange',
        routerLink: '/transactions'
      },
      {
        label: 'Notifications',
        icon: 'pi pi-fw pi-bell',
        routerLink: '/notifications'
      }
    ];
  }
}
