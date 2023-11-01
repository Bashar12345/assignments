from django.db import models
from .task_models import Task

from django.urls import reverse
from django.utils.text import slugify


class Photo(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='photos/')
    caption = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.task.title} - {self.caption}"

    def get_absolute_url(self):
        return reverse('photo_detail', args=[str(self.id), slugify(self.caption)])
