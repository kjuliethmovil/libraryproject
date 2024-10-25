// Transaction model interface
// Interfaz del modelo de Transacción
export interface TransactionI {
    id?: number; // Optional ID field / Campo ID opcional
    userId: number; // Required user ID field / Campo ID de usuario requerido
    bookId: number; // Required book ID field / Campo ID de libro requerido
    transactionDate: string; // Required transaction date field / Campo fecha de transacción requerido
}