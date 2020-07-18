from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('id', 'author', 'body', 'creation_date', 'slug', 'title')
        read_only_fields = ('creation_date', 'slug')
