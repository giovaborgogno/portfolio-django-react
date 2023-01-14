from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from .models import Experience
from .serializers import ExperienceSerializer

class GetExperienceView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        if Experience.objects.all().exists():
            experience = Experience.objects.order_by('-year_start').all()
            experience = ExperienceSerializer(experience, many=True)

            return Response(
                {'experience': experience.data},
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {'error': 'No Experience available'},
                status=status.HTTP_404_NOT_FOUND
            )