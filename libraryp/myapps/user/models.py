from django.db import models

# Modelo de Usuario
# User model
class User(models.Model):
    username = models.CharField(max_length=50, unique=True, help_text="Enter the username")
    email = models.EmailField(max_length=100, unique=True, help_text="Enter the email address")
    password = models.CharField(max_length=100, help_text="Enter the password")
    first_name = models.CharField(max_length=100, help_text="Enter the first name")
    last_name = models.CharField(max_length=100, help_text="Enter the last name")

    def __str__(self):
        return self.username  # Retorna el nombre de usuario

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"
