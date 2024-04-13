from django.db import models

# Create your models here.

class Product(models.Model):
    title=models.CharField(max_length=100)
    description=models.CharField(max_length=1000)
    price=models.DecimalField(max_digits=6, decimal_places=2)
    Image=models.FileField()
    category=models.CharField(max_length=50)
    rating=models.CharField(max_length=5)
    
    
class Rating(models.Model):
    rate=models.CharField(max_length=50)
    count=models.CharField(max_length=50)
    
class Order(models.Model):
    id=models.CharField(max_length=50)
    list_of_products=models.CharField(max_length=50)
    created_at=models.CharField(max_length=50)
    updated_at=models.CharField(max_length=50)
    status=models.CharField(max_length=50)
    subtotal=models.CharField(max_length=50)