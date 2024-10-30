from django.db import models
from myapps.user.models import User  # Importar el modelo User desde la app correcta
from myapps.book.models import Book  # Importar el modelo Book desde la app correcta

# Modelo de Préstamo
# Loan model
class Loan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, help_text="Select the user who borrows the book")
    book = models.ForeignKey(Book, on_delete=models.CASCADE, help_text="Select the book being borrowed")
    loan_date = models.DateField(auto_now_add=True, help_text="Loan date")
    return_date = models.DateField(null=True, blank=True, help_text="Return date")

    def __str__(self):
        return f"{self.user} borrowed {self.book}"

    class Meta:
        verbose_name = "loan"
        verbose_name_plural = "loans"

# Modelo de Reserva
# Reservation model
class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, help_text="Select the user who reserves the book")
    book = models.ForeignKey(Book, on_delete=models.CASCADE, help_text="Select the book being reserved")
    reservation_date = models.DateField(auto_now_add=True, help_text="Reservation date")
    expiration_date = models.DateField(help_text="Expiration date of the reservation")

    def __str__(self):
        return f"{self.user} reserved {self.book}"

    class Meta:
        verbose_name = "reservation"
        verbose_name_plural = "reservations"

# Modelo de Penalización
# Penalty model
class Penalty(models.Model):
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE, help_text="Related loan")  # Relación con Loan
    amount = models.DecimalField(max_digits=10, decimal_places=2, help_text="Penalty amount")
    penalty_date = models.DateField(auto_now_add=True, help_text="Penalty date")

    def __str__(self):
        return f'Penalty for {self.loan}'
