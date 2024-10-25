// Fecha de edición: 2024-10-20, 14:40
// Editado: Muestra una lista de notificaciones
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-notification',
  templateUrl: './show-notification.component.html',
  styleUrls: ['./show-notification.component.css']
})
export class ShowNotificationComponent {
  notifications: any[] = [];  // Almacena la lista de notificaciones

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getNotifications();  // Llama la función para obtener notificaciones
  }

  getNotifications() {
    this.http.get('/api/notifications').subscribe(data => {
      this.notifications = data as any[];  // Asigna la respuesta de la API a la lista
    });
  }
}
