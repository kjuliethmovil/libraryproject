// Fecha de edición: 2024-10-20, 14:20
// Editado: Muestra una lista de libros
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent {
  books: any[] = [];  // Almacena la lista de libros

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBooks();  // Llama la función para obtener libros
  }

  getBooks() {
    this.http.get('/api/books').subscribe(data => {
      this.books = data as any[];  // Asigna la respuesta de la API a la lista
    });
  }
}
