#  2019. Author: SergeyKons <https://github.com/SergeyKons>
from rest_framework import viewsets
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly

from projects.models import ProjectTag, Project
from projects.serializers import ProjectTagSerializer, ProjectSerializer


class ProjectTagViewSet(viewsets.ModelViewSet):
    """
    ViewSet for ProjectTag model. Provide serialization with ProjectTagSerializer
    """
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = ProjectTag.objects.all()
    serializer_class = ProjectTagSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Project model. Provide serialization with ProjectSerializer
    """
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
