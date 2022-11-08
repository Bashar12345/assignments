from django.contrib.auth.models import User, Group
from khoj_the_search.models import comma_separated_integers
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class comma_separated_integers_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = comma_separated_integers
        fields = ['url', 'user','input_values','timestamp']