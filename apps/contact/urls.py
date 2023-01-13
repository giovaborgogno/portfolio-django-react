# example/urls.py
from django.urls import path

from .views import SendEmailContact

app_name="contact"

urlpatterns = [
    path('send-email', SendEmailContact.as_view()),
]