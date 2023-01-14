# example/urls.py
from django.urls import path
from .views import GetEducationView


app_name="education"

urlpatterns = [
        path('get-education', GetEducationView.as_view()),

   
]