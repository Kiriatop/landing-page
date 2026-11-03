from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_redirect, name='home'),
    path('en/', views.index_en, name='home_en')
]
