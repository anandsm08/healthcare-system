# Generated by Django 4.1.7 on 2023-03-17 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='users',
            name='age',
        ),
        migrations.AddField(
            model_name='users',
            name='email',
            field=models.CharField(default='xyz@gmail.com', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='users',
            name='password',
            field=models.CharField(default='123456789', max_length=8),
            preserve_default=False,
        ),
    ]
