from django.contrib import admin
from myapps.book.models import Book  # Asegúrate de importar el modelo correctamente

class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'publication_date', 'available_copies')  # Verifica que los campos existan
admin.site.register(Book, BookAdmin)
