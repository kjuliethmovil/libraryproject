// Fecha de edición: 2024-10-20, 14:30
// Editado: Muestra una lista de transacciones
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css']
})
export class ShowTransactionComponent {
  transactions: any[] = [];  // Almacena la lista de transacciones

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTransactions();  // Llama la función para obtener transacciones
  }

  getTransactions() {
    this.http.get('/api/transactions').subscribe(data => {
      this.transactions = data as any[];  // Asigna la respuesta de la API a la lista
    });
  }
}
