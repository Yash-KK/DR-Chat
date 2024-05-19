from django.db import models
from drChat.settings import AUTH_USER_MODEL
# Create your models here.

class TimeStamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Category(TimeStamp):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class Server(TimeStamp):
    owner = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='server_owner')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='server_category')
    member = models.ManyToManyField(AUTH_USER_MODEL)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Channel(TimeStamp):
    owner = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='channel_owner')
    server = models.ForeignKey(Server, on_delete=models.CASCADE, related_name='channel_server')
    name = models.CharField(max_length=100)
    topic = models.CharField(max_length=100)

    def __str__(self):
        return self.name