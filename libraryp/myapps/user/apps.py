from django.apps import AppConfig

# Configuración de la app User
# Configuration for the User app
class UserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'myapps.user'  # Ruta de la app / App path
