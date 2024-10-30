# myapps/user/urls.py
from django.urls import path
from myapps.user.views import UserList, UserDetail  # Importamos las vistas

app_name = "user"
urlpatterns = [
    path('', UserList.as_view(), name='user-list'),  # Ruta para listar y crear usuarios
    path('<int:pk>/', UserDetail.as_view(), name='user-detail'),  # Ruta para detalles de usuario
]
