from django.apps import AppConfig

# Configuración de la app Book
# Configuration for the Book app
class BookConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'myapps.book'  # Ruta de la app / App path
