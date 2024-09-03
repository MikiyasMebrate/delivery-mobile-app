from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="categories/")

    def __str__(self):
        return self.name
    
class Dish(models.Model):
    name = models.CharField(max_length=100)
    short_description = models.CharField(max_length=100)
    image = models.URLField( max_length=200)
    price = models.FloatField()

    def __str__(self):
        return self.name
    

class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    short_description = models.CharField(max_length=100)
    rating = models.CharField(max_length=100)
    image = models.ImageField(upload_to="restaurants/")
    latitude = models.CharField(max_length=100)
    longitude = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    dishes = models.ManyToManyField(Dish)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


    def __str__(self):
        return self.name
    



class Featured(models.Model):
    name = models.CharField(max_length=100)
    short_description = models.CharField(max_length=100)
    restaurant = models.ManyToManyField(Restaurant)


    def __str__(self):
        return self.name
