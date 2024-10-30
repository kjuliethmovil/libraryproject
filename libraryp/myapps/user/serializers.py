# myapps/user/serializers.py
from rest_framework import serializers
from myapps.user.models import User  # Importamos el modelo User

# Serializer for User model / Serializador para el modelo User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']  # Campos a serializar

    def validate_username(self, value):
        """Ensure the username has more than 3 characters / Valida que el username tenga más de 3 caracteres"""
        if len(value) < 3:
            raise serializers.ValidationError('Username must be longer than 3 characters')
        return value
