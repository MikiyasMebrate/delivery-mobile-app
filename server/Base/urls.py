from django.urls import path
from . import views

urlpatterns = [
    path('category/', views.categories, name='index'),
     path('featured/', views.features, name='index'),
]