from django.db import models

# from django.db.models import ForeignKey, CASCADE
from django.contrib.auth.models import User
import datetime


class Task(models.Model):
    PRIORITY_CHOICES = (
        ("low", "Low"),
        ("medium", "Medium"),
        ("high", "High"),
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    due_date = models.DateField(
        default=datetime.date.today() + datetime.timedelta(days=3)
    )
    priority = models.CharField(
        max_length=6, choices=PRIORITY_CHOICES, default="medium"
    )
    completed = models.BooleanField(default=False)
    creation_date = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)

    # Relations
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tasks")

    def __str__(self):
        return self.title


# class Photo(models.Model):
#     task = models.ForeignKey(Task, on_delete=models.CASCADE)
#     image = models.BinaryField()
#     caption = models.CharField(max_length=255, blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     # relation
#     # task = ForeignKey("Task", on_delete=CASCADE)

#     def __str__(self):
#         return f"{self.task.title} - {self.caption}"


# class Photo(models.Model):
#     image = models.ImageField(upload_to='task_photos')
#     caption = models.CharField(max_length=255, blank=True)
#     upload_date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.image.name
