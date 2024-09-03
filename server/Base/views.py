from django.shortcuts import render, HttpResponse
from .models import (
    Category,
    Restaurant,
    Featured,
    Dish,
)

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def categories(request):
   if request.method == 'GET':
    category = list(Category.objects.all().values('id','name', 'image'))
    context = {
        'categories' : category
    }
    return Response(context)


@api_view(['GET'])
def features(request):
  if request.method == 'GET':
    if 'feature' in request.GET:
       feature = request.GET.get('feature')
       featured = Featured.objects.filter(id = feature).select_related().first()
       dishes = []
       for i in featured.restaurant.all():
          dishes.append({
              'id' : i.id,
              'image' : i.image.url,
              'name' : i.name,
              'rating' : i.rating,
              'address' : i.address,
              'short_description' : i.short_description,
              'longitude' : i.longitude,
              'latitude' : i.latitude,
              'dishes' : i.dishes.all().values()
          })
       context = {
            'restaurant' : dishes
        }
       return Response(context)
      
    else:
        featured = list(Featured.objects.all().values())
        context = {
            'featured' : featured
        }
        return Response(context)
   


