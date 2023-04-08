from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .models import ContactLead

class SendEmailContact(APIView):
    def post(self, request, format=None):
        try:
            data = self.request.data
            
            full_name = data['full_name']
            email = data['email']
            subject = data['subject']
            message = data['message']
            
            try:
                ContactLead.objects.create(
                    full_name=full_name,
                    subject=subject,
                    email=email,
                    message=message
                )
            except:
                return Response(
                {'error': 'Something went wrong creating a lead'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
                    
            
            try:
                send_mail(
                        'New Client',
                        'Full Name: ' + full_name + ','
                        + '\n\nEmail: ' + email
                        + '\nSubject: ' + subject
                        + '\n\nMessage: ' + message
                        + '\n\nFrom Giovanni Portfolio',
                        'giovaborgogno@itvirtuous.com',
                        ['giovaborgogno@itvirtuous.com'],
                        fail_silently=False
                    )
                
            
            
            except:
                return Response(
                    {'error': 'Failed to send email to giovaborgogno@itvirtuous.com'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
                
            try:
                send_mail(
                    'Hi ' + full_name,
                    'Hey ' + full_name + ','
                    + '\nI recieved your contact information!'
                    + '\nGive me some time to process your info and I\'ll contact you.'
                    + '\n\nSincerely,'
                    + '\nGiovanni Borgogno',
                    'giovaborgogno@itvirtuous.com',
                    [email],
                    fail_silently=False
                )
                
                
            except:
                return Response(
                    {'error': 'Failed to send email to ' + email},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
                
            return Response(
                {'success': 'Email sent successfully'},
                status=status.HTTP_200_OK
            )
            
        except:
            return Response(
                {'error': 'Something went wrong sending email'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )