# Generated by Django 3.0.8 on 2020-07-18 13:30

import autoslug.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField(verbose_name='body')),
                ('creation_date', models.DateTimeField(auto_now_add=True, verbose_name='creation_date')),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from='title')),
                ('title', models.CharField(error_messages={'unique': 'A post with that title already exists.'}, max_length=250, unique=True, verbose_name='title')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'post',
                'verbose_name_plural': 'posts',
            },
        ),
    ]
