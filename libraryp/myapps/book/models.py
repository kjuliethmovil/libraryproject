from django.db import models

# Modelo de Libro
# Book model
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    publication_date = models.DateField()  # Asegúrate de que este campo exista
    isbn = models.CharField(max_length=13, unique=True)
    available_copies = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title  # Retorna el título del libro
