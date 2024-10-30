# myapps/notifications/serializers.py
from rest_framework import serializers
from myapps.notifications.models import Notification, Report  # Importamos los modelos

# Serializer for Notification model / Serializador para el modelo Notification
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'user', 'message', 'date_created']  # Campos a serializar

# Serializer for Report model / Serializador para el modelo Report
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['id', 'title', 'content', 'date_created']  # Campos a serializar
