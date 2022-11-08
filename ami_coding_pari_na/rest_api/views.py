from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User, Group
from khoj_the_search.models import comma_separated_integers
from rest_framework import viewsets
from rest_framework import permissions
from . serializers import UserSerializer, comma_separated_integers_Serializer
from rest_framework.views import APIView 
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class comma_separated_integers_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = comma_separated_integers.objects.all()
    serializer_class = comma_separated_integers_Serializer
    permission_classes = [permissions.IsAuthenticated]


class AllInputValuesApiView(generics.ListAPIView):
    model = comma_separated_integers
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = comma_separated_integers_Serializer

    #input in url, the dates and users
    def get_queryset(self):
        queryset = comma_separated_integers.objects.all()
        param = self.kwargs.get('pk')
        start_date = self.kwargs.get('sk')
        end_date = self.kwargs.get('ek')
        #timestamp = self.request.query_params.get('timestamp')
        # user = self.request.query_params.get('user')

        # if timestamp:
        #     queryset = queryset.filter(user=param, date__gte = param2, date__lte = param3)
        # elif user:
        #     queryset = queryset.filter(user=user)

        return queryset.filter(user=param, timestamp__gte = start_date, timestamp__lte = end_date)
        #return namelist.objects.filter(user=param, timestamp__date__range=(start_date, end_date))