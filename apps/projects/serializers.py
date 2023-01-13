from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            'id',
            'name',
            'category',
            'url',
            'git_repo',
            'description',
            'photo_1',
            'photo_2',
            'photo_3',
            'date_created',
            'get_photo_1',
            'get_photo_2',
            'get_photo_3'
        ]