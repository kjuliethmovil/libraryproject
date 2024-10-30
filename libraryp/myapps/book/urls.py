# myapps/book/urls.py
from django.urls import path
from myapps.book.views import BookList, BookDetail  # Importamos las vistas

app_name = "book"
urlpatterns = [
    path('', BookList.as_view(), name='book-list'),  # Ruta para listar y crear libros
    path('<int:pk>/', BookDetail.as_view(), name='book-detail'),  # Ruta para detalles de libro
]
