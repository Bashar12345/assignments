from django.contrib import admin

# Register your models here.

from .model.task_models import Task
from .model.photo_models import Photo


class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "priority", "creation_date", "last_update")
    list_filter = ("priority",)
    search_fields = ("title", "description")
    ordering = ("-priority",)


class PhotoAdmin(admin.ModelAdmin):
    list_display = ("task", "caption", "created_at", "updated_at")
    list_filter = ("task",)
    search_fields = ("caption",)


admin.site.register(Photo, PhotoAdmin)
admin.site.register(Task, TaskAdmin)
