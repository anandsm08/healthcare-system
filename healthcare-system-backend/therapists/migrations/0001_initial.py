# Generated by Django 4.1.7 on 2023-03-17 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Therapists',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=100)),
                ('lname', models.CharField(max_length=100, null=True)),
                ('age', models.IntegerField()),
                ('location', models.TextField(max_length=200)),
                ('cv', models.FileField(max_length=254, upload_to=None)),
            ],
        ),
    ]
