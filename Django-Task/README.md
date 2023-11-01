# Django-Task

### The technologies used in this project include:

- Django: a Python-based web framework for building web applications quickly and efficiently
- PostgreSQL: a widely used relational database management system
- Django ORM: a powerful tool for managing database relations in Django
- Django templates: a built-in template language for rendering views in Django
- Git: a distributed version control system for managing source code changes
- Virtual environments: a tool for isolating Python environments to avoid dependency conflicts
- Environment variables: a secure way to store sensitive information such as database credentials and API keys


User - Task relation:
A user can create many tasks, and a task can be created by only one user. Therefore, we will use a OneToManyField in the User model to reference the Task model, and a ForeignKey in the Task model to reference the User model.

class User(AbstractBaseUser):
    # ...
    tasks = OneToManyField(Task, related_name='owner')

class Task:
    # ...
    owner = ForeignKey('User', on_delete=CASCADE, related_name='tasks')
Task - Tag relation:
A task can have multiple tags, and a tag can be associated with multiple tasks. Therefore, we will use a ManyToManyField in both the Task and Tag models.

class Task:
    # ...
    tags = ManyToManyField(Tag, related_name='tasks')

class Tag:
    # ...
    tasks = ManyToManyField(Task, related_name='tags')
Photo - Task relation:
A photo can be associated with only one task, and a task can have multiple photos. Therefore, we will use a ForeignKey in the Photo model to reference the Task model, and a OneToManyField in the Task model to reference the Photo model.

class Photo:
    # ...
    task = ForeignKey('Task', on_delete=CASCADE)

class Task:
    # ...
    photos = OneToManyField(Photo, related_name='task')
These relations allow us to create, read, update, and delete tasks, users, tags, and photos, and maintain their relationships correctly. For example, when creating a new task, we can assign it to a user and attach tags and photos to it. When retrieving a task, we can fetch its owner, tags, and photos along with it. When updating a task, we can modify its attributes, tags, and photos, and save them all together in a single transaction. When deleting a task, we can cascade the deletion to its associated photos and tags.


