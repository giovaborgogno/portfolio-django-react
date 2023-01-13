from django.db import models

class ContactLead(models.Model):
    full_name = models.CharField(max_length=255, unique=False)
    subject = models.CharField(max_length=255, unique=False)
    email = models.EmailField(max_length=255, unique=False)
    message = models.CharField(max_length=255, unique=False)

    def __str__(self):
        return self.full_name