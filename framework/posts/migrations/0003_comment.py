# Generated by Django 3.0.8 on 2020-07-18 17:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20200718_1333'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField(verbose_name='body')),
                ('creation_date', models.DateTimeField(auto_now_add=True, verbose_name='creation_date')),
                ('email', models.EmailField(max_length=254, verbose_name='email')),
                ('name', models.CharField(max_length=200, verbose_name='name')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='posts.Post')),
            ],
            options={
                'verbose_name': 'comment',
                'verbose_name_plural': 'comments',
            },
        ),
    ]
