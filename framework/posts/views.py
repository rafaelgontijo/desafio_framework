from django_filters import rest_framework as filters
from rest_framework import viewsets

from .models import Post
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    List, create, updates and retrieves posts
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'
    lookup_url_kwarg = 'slug'
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
        'author': ('exact',),
        'body': ('icontains',),
        'creation_date': ('exact', 'lt', 'gt', 'lte', 'gte'),
        'title': ('icontains',),
    }
