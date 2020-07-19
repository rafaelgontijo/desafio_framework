from django.forms.models import model_to_dict
from django_filters import rest_framework as filters
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Post
from .serializers import CommentSerializer, PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    List, create, updates and retrieves posts
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
        'author': ('exact',),
        'body': ('icontains',),
        'creation_date': ('exact', 'lt', 'gt', 'lte', 'gte'),
        'title': ('icontains',),
    }

    @action(detail=True, methods=['post'])
    def add_comment(self, request, pk=None):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            comment = serializer.save(post_id=pk)
            return Response(model_to_dict(comment))
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = queryset.filter(author=self.request.user)
        return queryset
