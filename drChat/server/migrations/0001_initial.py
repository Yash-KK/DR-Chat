# Generated by Django 5.0.6 on 2024-07-03 13:21

import django.db.models.deletion
import server.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
                ('icon', models.FileField(blank=True, null=True, upload_to=server.models.category_icon_upload_to)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Server',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
                ('icon', models.FileField(blank=True, null=True, upload_to=server.models.channel_icon_upload_to)),
                ('banner', models.ImageField(blank=True, null=True, upload_to=server.models.channel_banner_upload_to)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='server_category', to='server.category')),
                ('member', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='server_owner', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Channel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=100)),
                ('topic', models.CharField(max_length=100)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='channel_owner', to=settings.AUTH_USER_MODEL)),
                ('server', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='channel_server', to='server.server')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
