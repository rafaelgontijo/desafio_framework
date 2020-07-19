from django_filters import rest_framework as filters
from rest_framework import viewsets

from .models import Todo
from .serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    """
    List, create, updates and retrieves Todos
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
        'creation_date': ('exact', 'lt', 'gt', 'lte', 'gte'),
        'owner': ('exact',),
        'title': ('icontains',),
    }

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = queryset.filter(owner=self.request.user)
        return queryset
