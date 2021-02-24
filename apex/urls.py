from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='apex-home'),
    path('about/', views.about, name='apex-about'),
]
