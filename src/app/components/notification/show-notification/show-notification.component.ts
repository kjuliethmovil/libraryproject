// src/app/components/notification/show-notification/show-notification.component.ts
// Component to display and manage notifications
// Componente para show y gestionar notificaciones

import { Component, OnInit } from '@angular/core';
import { NotificationI } from '../../../models/notification'; // Import Notification model / Importar modelo de Notificación
import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification/notification.service'; // Import Notification service / Importar servicio de Notificación

@Component({
  selector: 'app-show-notification',
  templateUrl: './show-notification.component.html',
  styleUrls: ['./show-notification.component.css']
})
export class ShowNotificationComponent implements OnInit {
  public notifications: NotificationI[] = []; // Array to hold notifications / Array para almacenar notificaciones

  constructor(private notificationService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.showNotifications(); // Call method to display notifications / Llamar al método para show notificaciones
  }

  showNotifications() {
    this.notificationService.getAllNotifications().subscribe(data => {
      this.notifications = data; // Assign fetched notifications to the array / Asignar notificaciones obtenidas al array
    });
  }

  eliminar(id: number): void {
    this.notificationService.deleteNotification(id).subscribe(() => {
      this.showNotifications(); // Refresh the notification list after deletion / Actualizar la lista de notificaciones después de la eliminación
    });
  }
}