from django.contrib import admin
from .models import Experience

class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('id','company', 'position', )
    list_display_links = ('company',)
    list_editable = ('position',)
    search_fields = ('company',)
    list_per_page = 25
    
admin.site.register(Experience, ExperienceAdmin)

# Register your models here.
