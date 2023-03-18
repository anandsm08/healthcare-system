from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Therapists
from .serializers import TherapSerializer

@api_view(['GET'])
def getData(request):
    things = Therapists.objects.all()
    serializer = TherapSerializer(things)
    return Response(serializer.data)

@api_view(['POST'])
def addData(request):
    serializer = TherapSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 

@api_view(['DELETE'])
def delete(request, pk):
    acc = request.objects.filter(id=pk)
    acc.delete()
    return Response(status=status.Http_204_No_Content)

@api_view(['POST'])
def update(request, pk):
    item = Therapists.objects.get(pk=pk)
    data = TherapSerializer(instance=item, data=request.data)
 
    if data.is_valid():
        data.save()
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)