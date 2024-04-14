from rest_framework.response import Response
from rest_framework import status, generics
from .models import NoteModel
from django.http import JsonResponse
from .serializer import NoteSerializer
import math
from datetime import datetime

# Create your views here.

class Notes(generics.GenericAPIView):
    serializer_class = NoteSerializer
    queryset = NoteModel.objects.all()
    
    def get(self, request):
        notes = NoteModel.objects.all()
        serializer=self.serializer_class(notes, many=True)
        return Response({
            "notes":serializer.data
        })
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status":"success", "data":{"note":serializer.data}}, status=status.HTTP_201_CREATED)
        else:
            return Response({"status":"fail", "messages":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)