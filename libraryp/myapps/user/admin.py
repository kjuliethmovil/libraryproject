from django.contrib import admin
from myapps.user.models import User  # Importar el modelo User correctamente

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email')  # Mostrar campos en el panel de administración
    search_fields = ('username', 'email')  # Habilitar búsqueda por username y email

admin.site.register(User, UserAdmin)
