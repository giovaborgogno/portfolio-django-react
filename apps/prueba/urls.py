# example/urls.py
from django.urls import path

from .views import index

app_name="prueba"

urlpatterns = [
    path('', index),
]