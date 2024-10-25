// src/app/components/book/show-book/show-book.component.ts
// Component to display and manage books
// Componente para show y gestionar libros

import { Component, OnInit } from '@angular/core';
import { BookI } from '../../../models/book'; // Import Book model / Importar modelo de Libro
import { Router } from '@angular/router';
import { BookService } from '../../../services/book/book.service'; // Import Book service / Importar servicio de Libro

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class MostrarBookComponent implements OnInit {
  public books: BookI[] = []; // Array to hold books / Array para almacenar libros

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.showBooks(); // Call method to display books / Llamar al método para show libros
  }

  showBooks() {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data; // Assign fetched books to the array / Asignar libros obtenidos al array
    });
  }

  eliminar(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.showBooks(); // Refresh the book list after deletion / Actualizar la lista de libros después de la eliminación
    });
  }
}