# myapps/notifications/urls.py
from django.urls import path
from myapps.notifications.views import NotificationList, NotificationDetail, ReportList, ReportDetail

app_name = "notifications"
urlpatterns = [
    path('notifications/', NotificationList.as_view(), name='notification-list'),
    path('notifications/<int:pk>/', NotificationDetail.as_view(), name='notification-detail'),
    path('reports/', ReportList.as_view(), name='report-list'),
    path('reports/<int:pk>/', ReportDetail.as_view(), name='report-detail'),
]
