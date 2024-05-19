from django.contrib import admin

# Register your models here.
from .models import (
    Category,
    Server,
    Channel
)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']

class ServerAdmin(admin.ModelAdmin):
    list_display = ['name', 'owner', 'category']

class ChannelAdmin(admin.ModelAdmin):
    list_display = ['name', 'topic', 'owner', 'server']
    
admin.site.register(Category, CategoryAdmin)
admin.site.register(Server, ServerAdmin)
admin.site.register(Channel, ChannelAdmin)