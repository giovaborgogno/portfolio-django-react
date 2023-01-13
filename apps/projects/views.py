from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from .models import Project
from .serializers import ProjectSerializer

from django.db.models import Q


class ProjectDetailView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, projectId, format=None):
        try:
            project_id=int(projectId)
        except:
            return Response(
                {'error': 'Project ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND)
        
        if Project.objects.filter(id=project_id).exists():
            project = Project.objects.get(id=project_id)

            project = ProjectSerializer(project)

            return Response({'project': project.data}, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Project with this ID does not exist'},
                status=status.HTTP_404_NOT_FOUND)


class ListProjectsView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        sortBy = request.query_params.get('sortBy')

        if not (sortBy == 'date_created' or sortBy == 'category' or sortBy == 'name'):
            sortBy = 'date_created'
        
        order = request.query_params.get('order')
        limit = request.query_params.get('limit')

        if not limit:
            limit = 6
        
        try:
            limit = int(limit)
        except:
            return Response(
                {'error': 'Limit must be an integer'},
                status=status.HTTP_404_NOT_FOUND)
        
        if limit <= 0:
            limit = 6
        
        if order == 'desc':
            sortBy = '-' + sortBy
            projects = Project.objects.order_by(sortBy).all()[:int(limit)]
        elif order == 'asc':
            projects = Project.objects.order_by(sortBy).all()[:int(limit)]
        else:
            projects = Project.objects.order_by(sortBy).all()

        
        projects = ProjectSerializer(projects, many=True)

        if projects:
            return Response({'projects': projects.data}, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'No projects to list'},
                status=status.HTTP_404_NOT_FOUND)
