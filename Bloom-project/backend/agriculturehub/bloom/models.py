from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    country = models.CharField(max_length=100)
    province = models.CharField(max_length=100)

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return self.name
