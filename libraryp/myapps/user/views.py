# myapps/user/views.py
from rest_framework import generics
from myapps.user.models import User  # Importamos el modelo User
from myapps.user.serializers import UserSerializer  # Importamos el serializador

# List and create Users / Lista y crea Usuarios
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()  # Define el queryset con todos los usuarios
    serializer_class = UserSerializer  # Define el serializador

# Retrieve, update, and delete a User by ID / Obtener, actualizar, y eliminar un usuario por ID
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
