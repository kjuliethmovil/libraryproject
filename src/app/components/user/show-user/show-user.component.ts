// src/app/components/user/show-user/show-user.component.ts
// Component to display and manage users
// Componente para show y gestionar usuarios

import { Component, OnInit } from '@angular/core';
import { UserI } from '../../../models/user'; // Import User model / Importar modelo de Usuario
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service'; // Import User service / Importar servicio de Usuario

@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [],
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class MostrarUserComponent implements OnInit {
  public users: UserI[] = []; // Array to hold users / Array para almacenar usuarios

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.showUsers(); // Call method to display users / Llamar al método para show usuarios
  }

  showUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data; // Assign fetched users to the array / Asignar usuarios obtenidos al array
    });
  }

  eliminar(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.showUsers(); // Refresh the user list after deletion / Actualizar la lista de usuarios después de la eliminación
    });
  }
}