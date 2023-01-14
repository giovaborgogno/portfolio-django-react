from django.db import models

# Create your models here.
class Education(models.Model):
    
    PRIORITY_CHOICES = {
        (1, 'Maxima'),
        (2, 'Alta'),
        (3, 'Media'),
        (4, 'Baja'),
    }
    
    title = models.CharField(max_length=255)
    
    priority = models.IntegerField(choices=PRIORITY_CHOICES)
    
    year_start = models.CharField(max_length=4)
    year_end = models.CharField(max_length=4, blank=True)
    
    school = models.CharField(max_length=255)
    description = models.TextField()
    
    def __str__(self):
        return self.title