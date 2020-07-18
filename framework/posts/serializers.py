from rest_framework import serializers

from .models import Comment, Post


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'body', 'creation_date', 'email', 'name')
        read_only_fields = ('creation_date',)


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)

    class Meta:
        model = Post
        fields = ('id', 'author', 'comments', 'body', 'creation_date', 'slug', 'title')
        read_only_fields = ('creation_date', 'comments', 'slug')
