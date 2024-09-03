from django.contrib import admin
from .models import Dish, Restaurant, Category, Featured
# Register your models here.


admin.site.register(Dish)
admin.site.register(Restaurant)
admin.site.register(Category)
admin.site.register(Featured)
