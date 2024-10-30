# myapps/transactions/views.py
from rest_framework import generics
from myapps.transactions.models import Loan, Reservation, Penalty  # Importamos los modelos
from myapps.transactions.serializers import LoanSerializer, ReservationSerializer, PenaltySerializer  # Importamos los serializadores

# List and create Loans / Lista y crea Préstamos
class LoanList(generics.ListCreateAPIView):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer

# Retrieve, update, and delete a Loan by ID / Obtener, actualizar, y eliminar un préstamo por ID
class LoanDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer

# List and create Reservations / Lista y crea Reservas
class ReservationList(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

# Retrieve, update, and delete a Reservation by ID / Obtener, actualizar, y eliminar una reserva por ID
class ReservationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

# List and create Penalties / Lista y crea Penalizaciones
class PenaltyList(generics.ListCreateAPIView):
    queryset = Penalty.objects.all()
    serializer_class = PenaltySerializer

# Retrieve, update, and delete a Penalty by ID / Obtener, actualizar, y eliminar una penalización por ID
class PenaltyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Penalty.objects.all()
    serializer_class = PenaltySerializer
