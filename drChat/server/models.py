import os
from django.db import models
from drChat.settings import AUTH_USER_MODEL
from django.shortcuts import get_object_or_404


def category_icon_upload_to(instance, filename):
    return os.path.join("category_icons", filename)


def channel_icon_upload_to(instance, filename):
    return os.path.join("channel_icons", filename)


def channel_banner_upload_to(instance, filename):
    return os.path.join("channel_banner", filename)


# Create your models here.
class TimeStamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(TimeStamp):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    icon = models.FileField(upload_to=category_icon_upload_to, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.name = self.name.lower()
        if self.id:
            existing = get_object_or_404(Category, id=self.id)
            if existing.icon != self.icon:
                existing.icon.delete(save=False)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class Server(TimeStamp):
    owner = models.ForeignKey(
        AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="server_owner"
    )
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="server_category"
    )
    member = models.ManyToManyField(AUTH_USER_MODEL)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    icon = models.FileField(upload_to=channel_icon_upload_to, blank=True, null=True)
    banner = models.ImageField(
        upload_to=channel_banner_upload_to, blank=True, null=True
    )

    def save(self, *args, **kwargs):
        if self.id:
            existing = get_object_or_404(Server, id=self.id)
            if existing.icon != self.icon:
                existing.icon.delete(save=False)

            if existing.banner != self.banner:
                existing.banner.delete(save=False)

        super(Server, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class Channel(TimeStamp):
    owner = models.ForeignKey(
        AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="channel_owner"
    )
    server = models.ForeignKey(
        Server, on_delete=models.CASCADE, related_name="channel_server"
    )
    name = models.CharField(max_length=100)
    topic = models.CharField(max_length=100)

    def __str__(self):
        return self.name
