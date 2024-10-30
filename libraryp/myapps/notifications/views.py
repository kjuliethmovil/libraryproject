# myapps/notifications/views.py
from rest_framework import generics
from myapps.notifications.models import Notification, Report  # Importamos los modelos
from myapps.notifications.serializers import NotificationSerializer, ReportSerializer  # Importamos los serializadores

# List and create Notifications / Lista y crea Notificaciones
class NotificationList(generics.ListCreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

# Retrieve, update, and delete a Notification by ID / Obtener, actualizar, y eliminar una notificación por ID
class NotificationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

# List and create Reports / Lista y crea Reportes
class ReportList(generics.ListCreateAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

# Retrieve, update, and delete a Report by ID / Obtener, actualizar, y eliminar un reporte por ID
class ReportDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
