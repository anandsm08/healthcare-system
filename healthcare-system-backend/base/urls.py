from django.urls import path
from . import views

urlpatterns = [
    path('', views.summit, name='summit'),
]