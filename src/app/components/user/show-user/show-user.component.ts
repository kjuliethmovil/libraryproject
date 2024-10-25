// Fecha de edición: 2024-10-20, 14:10
// Editado: Muestra una lista de usuarios / Displays a list of users

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importa cliente HTTP / Imports HTTP client

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent {
  users: any[] = [];  // Almacena la lista de usuarios / Stores the list of users

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();  // Llama la función para obtener usuarios / Calls the function to get users
  }

  getUsers() {
    this.http.get('/api/users').subscribe(data => {
      this.users = data as any[];  // Asigna la respuesta de la API a la lista / Assigns API response to the list
    });
  }
}
