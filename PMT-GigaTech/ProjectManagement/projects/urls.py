from django.urls import path
from . import views

urlpatterns = [
    path('', views.project_list, name='project_list'),
    path('projects/<int:pk>/', views.project_detail, name='project_detail'),
    path('projects/new/', views.project_create, name='project_create'),
    path('projects/<int:project_pk>/tasks/new/', views.task_create, name='task_create'),
]
