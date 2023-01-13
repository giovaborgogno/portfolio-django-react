from django.db import models
from datetime import datetime

from django.conf import settings
domain = settings.DOMAIN

class Project(models.Model):
    
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    git_repo = models.CharField(max_length=255)
    description = models.TextField()
    
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/')
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/')
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/')
    
    date_created = models.DateTimeField(default=datetime.now)

    def get_photo_1(self):
        if self.photo_1:
            return self.photo_1.url
        return ''
    
    def get_photo_2(self):
        if self.photo_2:
            return self.photo_2.url
        return ''
    
    def get_photo_3(self):
        if self.photo_3:
            return self.photo_3.url
        return ''

    def __str__(self):
        return self.name