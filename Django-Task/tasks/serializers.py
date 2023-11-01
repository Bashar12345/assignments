from rest_framework import serializers
from tasks.model.task_models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            "id",
            "title",
            "description",
            "due_date",
            "priority",
            "completed",
            "creation_date",
            "last_update",
            "owner",
            "photos",
        ]
