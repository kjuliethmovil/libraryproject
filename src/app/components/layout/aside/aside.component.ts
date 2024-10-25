// Fecha de edición: 2024-10-20, 14:20
// Editado: Vincula las rutas a las opciones del menú
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
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        routerLink: '/users'  // Enlace a la página de usuarios
      },
      {
        label: 'Books',
        icon: 'pi pi-fw pi-book',
        routerLink: '/books'  // Enlace a la página de libros
      },
      {
        label: 'Transactions',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: '/transactions'  // Enlace a la página de transacciones
      },
      {
        label: 'Notifications',
        icon: 'pi pi-fw pi-bell',
        routerLink: '/notifications'  // Enlace a la página de notificaciones
      }
    ];
  }
}
