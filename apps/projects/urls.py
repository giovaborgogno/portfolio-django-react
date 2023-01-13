# example/urls.py
from django.urls import path
from .views import ProjectDetailView, ListProjectsView


app_name="projects"

urlpatterns = [
    path('project/<projectId>', ProjectDetailView.as_view()),
    path('get-projects', ListProjectsView.as_view()),
]