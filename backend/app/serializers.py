from rest_framework import serializers
from .models import NewsQuery


class NewsQuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsQuery
        fields = '__all__'  