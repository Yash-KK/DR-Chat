from rest_framework import serializers
from .models import (
    Server,
    Channel,
    Category
)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = '__all__'

class ServerSerializer(serializers.ModelSerializer):
    channel_server = ChannelSerializer(many=True)
    category = serializers.StringRelatedField()
    class Meta:
        model = Server
        exclude = ['member']

