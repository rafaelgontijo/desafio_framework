from rest_framework import serializers

from .models import Album, Photo


class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo
        fields = ('id', 'title', 'creation_date', 'url', 'thumbnail_url')
        read_only_fields = ('creation_date',)


class AlbumSerializer(serializers.ModelSerializer):
    photos = PhotoSerializer(many=True)

    class Meta:
        model = Album
        fields = ('id', 'creation_date', 'owner', 'title', 'photos')
        read_only_fields = ('creation_date', 'photos')
