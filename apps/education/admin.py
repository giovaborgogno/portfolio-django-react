from django.contrib import admin
from .models import Education

class EducationAdmin(admin.ModelAdmin):
    list_display = ('id','title','school', 'priority', )
    list_display_links = ('title',)
    list_editable = ('school','priority',)
    search_fields = ('title',)
    list_per_page = 25
    
admin.site.register(Education, EducationAdmin)

# Register your models here.
