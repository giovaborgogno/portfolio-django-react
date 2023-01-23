from django.db import models

# Create your models here.
class Experience(models.Model):
    
    position = models.CharField(max_length=255)
    
    year_start = models.CharField(max_length=4)
    year_end = models.CharField(max_length=4, blank=True)
    
    company = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='photos/%Y/%m/')

    description = models.CharField(max_length=255)
    detail_1 = models.TextField()
    detail_2 = models.TextField(blank=True)
    detail_3 = models.TextField(blank=True)
    
    def get_photo(self):
        if self.photo:
            return self.photo.url
        return ''
    
    def __str__(self):
        return self.position
    