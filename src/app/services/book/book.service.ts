import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookI } from '../../models/book'; // Importar el modelo de Book

@Injectable({
  providedIn: 'root'
})
export class BookService {
  api_uri = 'http://localhost:8000'; // Cambia a la URL base de tu API
  base_path = `${this.api_uri}/books`; // Ruta base para la API de libros

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<BookI[]> {
    return this.http.get<BookI[]>(this.base_path); // Obtener todos los libros
  }

  getBook(id: number): Observable<BookI> {
    return this.http.get<BookI>(`${this.base_path}/${id}`); // Obtener un libro específico
  }

  createBook(data: BookI): Observable<BookI> {
    return this.http.post<BookI>(this.base_path, data); // Crear un nuevo libro
  }

  updateBook(id: number, data: BookI): Observable<BookI> {
    return this.http.put<BookI>(`${this.base_path}/${id}`, data); // Actualizar un libro existente
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.base_path}/${id}`); // Eliminar un libro
  }
}