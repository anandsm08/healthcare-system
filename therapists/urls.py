from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.addData, name='signup'),
    path('<int:pk>/', views.getData, name='profile'),
    path('<int:pk>/delete', views.delete, name='delete'),
    path('<int:pk>/update', views.update, name='update'),
]