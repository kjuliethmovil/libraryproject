# myapps/transactions/serializers.py
from rest_framework import serializers
from myapps.transactions.models import Loan, Reservation, Penalty  # Importamos los modelos

# Serializer for Loan model / Serializador para el modelo Loan
class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = ['id', 'user', 'book', 'loan_date', 'return_date']  # Campos a serializar

# Serializer for Reservation model / Serializador para el modelo Reservation
class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ['id', 'user', 'book', 'reservation_date', 'expiration_date']

# Serializer for Penalty model / Serializador para el modelo Penalty
class PenaltySerializer(serializers.ModelSerializer):
    class Meta:
        model = Penalty
        fields = ['id', 'loan', 'amount', 'penalty_date']
