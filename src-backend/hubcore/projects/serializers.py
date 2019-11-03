#  2019. Author: SergeyKons <https://github.com/SergeyKons>

from rest_framework import serializers

from projects.models import ProjectTag, Project


class ProjectTagSerializer(serializers.ModelSerializer):
    """
    DRF Serializer for ProjectTag model
    provide serialization for all model's fields exclude internal 'created_at' and 'edited_at' fields
    """

    class Meta:
        model = ProjectTag
        exclude = ["created_at", "edited_at"]


class ProjectSerializer(serializers.ModelSerializer):
    """
    DRF Serializer for Project model
    provide serialization for all model's fields exclude internal 'created_at' and 'edited_at' fields
    """

    class Meta:
        model = Project
        exclude = ["created_at", "edited_at"]

