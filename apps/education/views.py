from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from .models import Education
from .serializers import EducationSerializer

class GetEducationView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        if Education.objects.all().exists():
            education = Education.objects.order_by('priority').all()
            education = EducationSerializer(education, many=True)

            return Response(
                {'education': education.data},
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {'error': 'No education available'},
                status=status.HTTP_404_NOT_FOUND
            )