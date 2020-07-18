from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="framework",
        default_version='v1',
        description="Desafio Técnico do processo seletivo da Framework",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="teste@frwk.com.br"),
        license=openapi.License(name="MIT"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
