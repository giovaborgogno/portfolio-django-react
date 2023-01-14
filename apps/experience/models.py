from django.db import models

# Create your models here.
class Experience(models.Model):
    
    position = models.CharField(max_length=255)
    
    year_start = models.CharField(max_length=4)
    year_end = models.CharField(max_length=4, blank=True)
    
    company = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    detail_1 = models.TextField()
    detail_2 = models.TextField(blank=True)
    detail_3 = models.TextField(blank=True)
    
    def __str__(self):
        return self.position