from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .data import books
from .serializers import BookSerializer
# Create your views here.

class BookList(View):
    def get(self, request):
        serialized_books=BookSerializer(books, many=True).data
        return JsonResponse(serialized_books, safe=False)