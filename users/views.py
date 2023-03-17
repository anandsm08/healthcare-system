from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Users
from .serializers import UserSerializer

@api_view(['GET'])
def getData(request, pk):
    things = Users.objects.filter(id=pk)
    if (things): 
        things = things[0]
        serializer = UserSerializer(things)
        return Response(serializer.data)
    else:
        return Response('')

@api_view(['POST'])
def addData(request):
    serializer = UserSerializer(data=request.data)
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
    item = Users.objects.get(pk=pk)
    data = UserSerializer(instance=item, data=request.data)
 
    if data.is_valid():
        data.save()
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)