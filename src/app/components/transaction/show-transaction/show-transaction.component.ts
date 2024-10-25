// src/app/components/transaction/show-transaction/show-transaction.component.ts
// Component to display and manage transactions
// Componente para show y gestionar transacciones

import { Component, OnInit } from '@angular/core';
import { TransactionI } from '../../../models/transaction'; // Import Transaction model / Importar modelo de Transacción
import { Router } from '@angular/router';
import { TransactionService } from '../../../services/transaction/transaction.service'; // Import Transaction service / Importar servicio de Transacción

@Component({
  selector: 'app-show-transaction',
  standalone: true,
  imports: [],
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css']
})
export class MostrarTransactionComponent implements OnInit {
  public transactions: TransactionI[] = []; // Array to hold transactions / Array para almacenar transacciones

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.showTransactions(); // Call method to display transactions / Llamar al método para show transacciones
  }

  showTransactions() {
    this.transactionService.getAllTransactions().subscribe(data => {
      this.transactions = data; // Assign fetched transactions to the array / Asignar transacciones obtenidas al array
    });
  }

  eliminar(id: number): void {
    this.transactionService.deleteTransaction(id).subscribe(() => {
      this.showTransactions(); // Refresh the transaction list after deletion / Actualizar la lista de transacciones después de la eliminación
    });
  }
}