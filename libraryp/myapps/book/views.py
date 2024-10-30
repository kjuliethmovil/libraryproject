# myapps/book/views.py
from rest_framework import generics
from myapps.book.models import Book  # Importamos el modelo Book
from myapps.book.serializers import BookSerializer  # Importamos el serializador

# List and create Books / Lista y crea Libros
class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all()  # Define el queryset con todos los libros
    serializer_class = BookSerializer  # Define el serializador

# Retrieve, update, and delete a Book by ID / Obtener, actualizar, y eliminar un libro por ID
class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
