from django.contrib import admin
from myapps.transactions.models import Loan, Reservation, Penalty  # Importar los modelos correctamente

class LoanAdmin(admin.ModelAdmin):
    list_display = ('id', 'book', 'user', 'loan_date', 'return_date')  # Verifica que estos campos existan
    search_fields = ('user__username', 'book__title')

admin.site.register(Loan, LoanAdmin)

class ReservationAdmin(admin.ModelAdmin):
    list_display = ('id', 'book', 'user', 'reservation_date')  # Verifica que los campos existan
    search_fields = ('user__username', 'book__title')

admin.site.register(Reservation, ReservationAdmin)

class PenaltyAdmin(admin.ModelAdmin):
    list_display = ('id', 'loan', 'amount', 'penalty_date')  # Verifica que los campos existan
admin.site.register(Penalty, PenaltyAdmin)
