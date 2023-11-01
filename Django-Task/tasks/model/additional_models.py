from django.db import models
from django.contrib.auth.models import User
from tasks.models import Task
from photos.models import Photo


class TaskSearchIndex(models.Model):
    task = models.OneToOneField(Task, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    tags = models.TextField()

    def __str__(self):
        return f"Search index for task {self.task}"


class PhotoSearchIndex(models.Model):
    photo = models.OneToOneField(Photo, on_delete=models.CASCADE)
    caption = models.CharField(max_length=255)
    tags = models.TextField()

    def __str__(self):
        return f"Search index for photo {self.photo}"


class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class TaskTag(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.task}: {self.tag}"


class PhotoTag(models.Model):
    photo = models.ForeignKey(Photo, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.photo}: {self.tag}"


class Comment(models.Model):
    commenter = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class TaskComment(Comment):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)

    def __str__(self):
        return f"Comment on task {self.task} by {self.commenter}"


class PhotoComment(Comment):
    photo = models.ForeignKey(Photo, on_delete=models.CASCADE)

    def __str__(self):
        return f"Comment on photo {self.photo} by {self.commenter}"


# Explanation:

# - I define a `TaskSearchIndex` model and a `PhotoSearchIndex` model to store data that can be searched when looking for tasks or photos. The `TaskSearchIndex` model has a one-to-one relationship with the `Task` model, and the `PhotoSearchIndex` model has a one-to-one relationship with the `Photo` model. Both models store searchable fields such as `title`, `description`, and `caption`, as well as a field for `tags`.

# - I define a `Tag` model to represent individual tags that can be associated with tasks or photos. The `name` field is a unique identifier for each tag.

# - I define `TaskTag` and `PhotoTag` models to store associations between tasks or photos and tags. Both models have a foreign key to their respective model and to the `Tag` model. These models allow tags to be assigned to tasks or photos, and for tasks or photos to be searched by tags.

# - I define an abstract `Comment` model that has common fields for comments made on tasks or photos. The `TaskComment` and `PhotoComment` models inherit from the `Comment` model and have a foreign key to the `Task` or `Photo` model, respectively. These models store information about who made the comment, the content of the comment, and the timestamps for when the comment was created or last updated.
