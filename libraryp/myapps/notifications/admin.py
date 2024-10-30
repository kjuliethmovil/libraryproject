from django.contrib import admin
from myapps.notifications.models import Notification, Report  # Importar los modelos correctos

# Registro del modelo Notification
# Registration of the Notification model
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'message', 'date_created')  # Verifica que los campos existan
admin.site.register(Notification, NotificationAdmin)

# Registro del modelo Report
# Registration of the Report model
class ReportAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'date_created')  # Verifica que los campos existan
admin.site.register(Report, ReportAdmin)
