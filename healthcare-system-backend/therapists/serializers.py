from rest_framework import serializers
from . import models

class TherapSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Therapists
        fields = '__all__'