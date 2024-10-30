# myapps/transactions/urls.py
from django.urls import path
from myapps.transactions.views import LoanList, LoanDetail, ReservationList, ReservationDetail, PenaltyList, PenaltyDetail

app_name = "transactions"
urlpatterns = [
    path('loans/', LoanList.as_view(), name='loan-list'),
    path('loans/<int:pk>/', LoanDetail.as_view(), name='loan-detail'),
    path('reservations/', ReservationList.as_view(), name='reservation-list'),
    path('reservations/<int:pk>/', ReservationDetail.as_view(), name='reservation-detail'),
    path('penalties/', PenaltyList.as_view(), name='penalty-list'),
    path('penalties/<int:pk>/', PenaltyDetail.as_view(), name='penalty-detail'),
]
