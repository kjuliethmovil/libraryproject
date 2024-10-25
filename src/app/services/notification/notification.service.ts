import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationI } from '../../models/notification'; // Importar el modelo de Notification

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  api_uri = 'http://localhost:8000'; // Cambia a la URL base de tu API
  base_path = `${this.api_uri}/notifications`; // Ruta base para la API de notificaciones

  constructor(private http: HttpClient) { }

  getAllNotifications(): Observable<NotificationI[]> {
    return this.http.get<NotificationI[]>(this.base_path); // Obtener todas las notificaciones
  }

  getNotification(id: number): Observable<NotificationI> {
    return this.http.get<NotificationI>(`${this.base_path}/${id}`); // Obtener una notificación específica
  }

  createNotification(data: NotificationI): Observable<NotificationI> {
    return this.http.post<NotificationI>(this.base_path, data); // Crear una nueva notificación
  }

  updateNotification(id: number, data: NotificationI): Observable<NotificationI> {
    return this.http.put<NotificationI>(`${this.base_path}/${id}`, data); // Actualizar una notificación existente
  }

  deleteNotification(id: number): Observable<any> {
    return this.http.delete(`${this.base_path}/${id}`); // Eliminar una notificación
  }
}