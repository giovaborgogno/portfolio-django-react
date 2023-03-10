# Generated by Django 3.1.7 on 2023-01-14 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('priority', models.IntegerField(choices=[(4, 'Baja'), (2, 'Alta'), (1, 'Maxima'), (3, 'Media')])),
                ('year_start', models.CharField(max_length=4)),
                ('year_end', models.CharField(blank=True, max_length=4)),
                ('school', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
            ],
        ),
    ]
