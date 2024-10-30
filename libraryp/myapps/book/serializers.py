# myapps/book/serializers.py
from rest_framework import serializers
from myapps.book.models import Book  # Importamos el modelo Book

# Serializer for Book model / Serializador para el modelo Book
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'publication_date', 'isbn', 'available_copies']
