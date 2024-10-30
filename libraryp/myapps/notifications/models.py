from django.db import models
from myapps.user.models import User  # Importa el modelo User desde la app correcta

# Modelo de Notificación
# Notification model
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Relación con el modelo User
    message = models.TextField()  # Mensaje de notificación
    date_created = models.DateTimeField(auto_now_add=True)  # Fecha de creación automática

    def __str__(self):
        return f'Notification for {self.user}'  # Retorna el nombre del usuario

# Modelo de Reporte
# Report model
class Report(models.Model):
    title = models.CharField(max_length=200)  # Título del reporte
    content = models.TextField()  # Contenido del reporte
    date_created = models.DateTimeField(auto_now_add=True)  # Fecha de creación automática

    def __str__(self):
        return self.title  # Retorna el título del reporte

