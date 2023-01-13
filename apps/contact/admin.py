from django.contrib import admin
from .models import ContactLead
# Register your models here.

class ContactLeadAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'subject','email','message')
    list_display_links = ('full_name', 'email',)
    search_fields = ('full_name', 'email')
    list_per_page = 25
    
admin.site.register(ContactLead, ContactLeadAdmin)