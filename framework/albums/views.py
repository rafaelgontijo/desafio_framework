from django_filters import rest_framework as filters
from rest_framework import viewsets

from .models import Album
from .serializers import AlbumSerializer


class AlbumViewSet(viewsets.ModelViewSet):
    """
    List, create, updates and retrieves albums
    """
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
        'owner': ('exact',),
        'title': ('icontains',),
        'creation_date': ('exact', 'lt', 'gt', 'lte', 'gte'),
    }

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = queryset.filter(owner=self.request.user)
        return queryset