import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionI } from '../../models/transaction'; // Importar el modelo de Transaction

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  api_uri = 'http://localhost:8000'; // Cambia a la URL base de tu API
  base_path = `${this.api_uri}/transactions`; // Ruta base para la API de transacciones

  constructor(private http: HttpClient) { }

  getAllTransactions(): Observable<TransactionI[]> {
    return this.http.get<TransactionI[]>(this.base_path); // Obtener todas las transacciones
  }

  getTransaction(id: number): Observable<TransactionI> {
    return this.http.get<TransactionI>(`${this.base_path}/${id}`); // Obtener una transacción específica
  }

  createTransaction(data: TransactionI): Observable<TransactionI> {
    return this.http.post<TransactionI>(this.base_path, data); // Crear una nueva transacción
  }

  updateTransaction(id: number, data: TransactionI): Observable<TransactionI> {
    return this.http.put<TransactionI>(`${this.base_path}/${id}`, data); // Actualizar una transacción existente
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`${this.base_path}/${id}`); // Eliminar una transacción
  }
}