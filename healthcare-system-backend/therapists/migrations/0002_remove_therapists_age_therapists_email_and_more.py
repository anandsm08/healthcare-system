# Generated by Django 4.1.7 on 2023-03-17 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('therapists', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='therapists',
            name='age',
        ),
        migrations.AddField(
            model_name='therapists',
            name='email',
            field=models.CharField(default='abc@gmail.com', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='therapists',
            name='password',
            field=models.CharField(default='123456789', max_length=8),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='therapists',
            name='phone',
            field=models.IntegerField(max_length=10, null=True),
        ),
    ]
