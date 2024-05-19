from django.db.models.signals import post_delete
from django.dispatch import receiver

from .models import (
    Category,
    Channel
)


@receiver(post_delete, sender=Category)
def delete_category_icon(sender, instance, **kwargs):
    if instance.icon:
        instance.icon.delete(save=False)

@receiver(post_delete, sender=Channel)
def delete_channel_icon(sender, instance, **kwargs):
    if instance.icon:
        instance.icon.delete(save=False)

    if instance.banner:
        instance.banner.delete(save=False)
