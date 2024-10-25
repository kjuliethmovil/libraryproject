// Notification model interface
// Interfaz del modelo de Notificación
export interface NotificationI {
    id?: number; // Optional ID field / Campo ID opcional
    message: string; // Required message field / Campo mensaje requerido
    userId: number; // Required user ID field / Campo ID de usuario requerido
}