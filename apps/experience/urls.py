# example/urls.py
from django.urls import path
from .views import GetExperienceView


app_name="experience"

urlpatterns = [
        path('get-experience', GetExperienceView.as_view()),

   
]