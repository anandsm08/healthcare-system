from django.db import models

class Therapists(models.Model):
    fname = models.CharField(max_length=100, null=False)
    lname = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=20)
    password = models.CharField(max_length=8)
    location = models.TextField(max_length=200)
    phone = models.IntegerField(max_length=10, null=True)
    cv = models.FileField(upload_to=None, max_length=254)

    def __str__(self):
        return self.fname
