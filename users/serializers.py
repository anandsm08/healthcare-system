from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Users
        fields = ['fname', 'email','password', 'location']