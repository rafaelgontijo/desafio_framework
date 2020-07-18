from rest_framework import serializers

from .models import Todo


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ('id', 'creation_date', 'owner', 'title')
        read_only_fields = ('creation_date', )
