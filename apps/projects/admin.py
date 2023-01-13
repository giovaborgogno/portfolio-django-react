from django.contrib import admin

from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', )
    list_display_links = ('id', 'name', )
    # list_filter = ('category', )
    # list_editable = ('compare_price', 'price', 'quantity', )
    search_fields = ('name', 'category', )
    list_per_page = 25

admin.site.register(Project, ProjectAdmin)