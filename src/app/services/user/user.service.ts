import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserI } from '../../models/user'; // Import User model

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_uri = 'http://localhost:8000'; // Change to your API base URL / Cambia a la URL base de tu API
  base_path = `${this.api_uri}/users`; // Base path for user API / Ruta base para la API de usuarios

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserI[]> {
    return this.http.get<UserI[]>(this.base_path); // Get all users / Obtener todos los usuarios
  }

  getUser(id: number): Observable<UserI> {
    return this.http.get<UserI>(`${this.base_path}/${id}`); // Get a specific user / Obtener un usuario específico
  }

  createUser(data: UserI): Observable<UserI> {
    return this.http.post<UserI>(this.base_path, data); // Create a new user / Crear un nuevo usuario
  }

  updateUser(id: number, data: UserI): Observable<UserI> {
    return this.http.put<UserI>(`${this.base_path}/${id}`, data); // Update an existing user / Actualizar un usuario existente
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.base_path}/${id}`); // Delete a user / Eliminar un usuario
  }
}