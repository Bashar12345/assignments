from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import (
    CreateView,
    ListView,
    DetailView,
    UpdateView,
    DeleteView,
)

from tasks.model.task_models import Task
from tasks.forms import *

# Create your views here.


# TaskListView:
class TaskListView(ListView):
    model = Task
    template_name = 'tasks/list.html'
    context_object_name = 'tasks'

    def get_queryset(self):
        return Task.objects.filter(owner_id=self.request.user)


# b. TaskCreateView:
class TaskCreateView(CreateView):
    model = Task
    form_class = TaskCreateForm
    template_name = "tasks/create.html"
    success_url = reverse_lazy("tasks:task_list")

    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)


# c. TaskDetailView:
class TaskDetailView(DetailView):
    model = Task
    template_name = "tasks/detail.html"


# d. TaskUpdateView:
class TaskUpdateView(UpdateView):
    model = Task
    form_class = TaskUpdateForm
    template_name = "tasks/update.html"
    success_url = "/tasks/"


# e. TaskDeleteView:
class TaskDeleteView(DeleteView):
    model = Task
    template_name = "tasks/delete.html"
    success_url = "/tasks/"


# from django.shortcuts import render, get_object_or_404, redirect
# from django.views import View
# from .models import Task, TaskComment, TaskTag, Photo, PhotoComment, PhotoTag
# from .forms import TaskCreateForm, TaskUpdateForm, TaskCommentForm, TaskTagForm, PhotoCreateForm, PhotoCommentForm, PhotoTagForm

# class TaskListView(View):
#     def get(self, request):
#         tasks = Task.objects.all()
#         return render(request, 'tasks/task_list.html', {'tasks': tasks})


# class TaskCreateView(View):
#     template_name = 'tasks/task_create.html'

#     def get(self, request):
#         form = TaskCreateForm()
#         return render(request, self.template_name, {'form': form})

#     def post(self, request):
#         form = TaskCreateForm(request.POST)
#         if form.is_valid():
#             task = form.save(commit=False)
#             task.author = request.user
#             task.save()
#             return redirect('task_details', task.id)
#         return render(request, self.template_name, {'form': form})


# class TaskDetailsView(View):
#     template_name = 'tasks/task_details.html'

#     def get(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         photos = Photo.objects.filter(task=task)
#         task_tags = TaskTag.objects.filter(task=task)
#         task_comments = TaskComment.objects.filter(task=task)
#         form = TaskCommentForm()
#         return render(request, self.template_name, {
#             'task': task,
#             'photos': photos,
#             'task_tags': task_tags,
#             'task_comments': task_comments,
#             'form': form
#         })

#     def post(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         form = TaskCommentForm(request.POST)
#         if form.is_valid():
#             comment = form.save(commit=False)
#             comment.task = task
#             comment.commenter = request.user.username
#             comment.save()
#             return redirect('task_details', pk)
#         photos = Photo.objects.filter(task=task)
#         task_tags = TaskTag.objects.filter(task=task)
#         task_comments = TaskComment.objects.filter(task=task)
#         return render(request, self.template_name, {
#             'task': task,
#             'photos': photos,
#             'task_tags': task_tags,
#             'task_comments': task_comments,
#             'form': form
#         })


# class TaskUpdateView(View):
#     template_name = 'tasks/task_update.html'

#     def get(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         if request.user != task.author:
#             return redirect('task_details', pk)
#         form = TaskUpdateForm(instance=task)
#         return render(request, self.template_name, {'form': form})

#     def post(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         if request.user != task.author:
#             return redirect('task_details', pk)
#         form = TaskUpdateForm(request.POST, instance=task)
#         if form.is_valid():
#             form.save()
#             return redirect('task_details', pk)
#         return render(request, self.template_name, {'form': form})


# class TaskDeleteView(View):
#     template_name = 'tasks/task_delete.html'

#     def get(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         if request.user != task.author:
#             return redirect('task_details', pk)
#         return render(request, self.template_name, {'task': task})

#     def post(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         if request.user != task.author:
#             return redirect('task_details', pk)
#         task.delete()
#         return redirect('task_list')


# class TaskTagCreateView(View):
#     template_name = 'tasks/task_tag_create.html'

#     def get(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         if request.user != task.author:
#             return redirect('task_details', pk)
#         form = TaskTagForm()
#         return render(request, self.template_name, {'form': form, 'task': task})

#     def post(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         if request.user != task.author:
#             return redirect('task_details', pk)
#         form = TaskTagForm(request.POST)
#         if form.is_valid():
#             task_tag = form.save(commit=False)
#             task_tag.task = task
#             task_tag.save()
#             return redirect('task_details', pk)
#         return render(request, self.template_name, {'form': form, 'task': task})


# class PhotoCreateView(View):
#     template_name = 'tasks/photo_create.html'

#     def get(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         if request.user != task.author:
#             return redirect('task_details', pk)
#         form = PhotoCreateForm()
#         return render(request, self.template_name, {'form': form, 'task': task})

#     def post(self, request, pk):
#         task = get_object_or_404(Task, pk=pk)
#         if request.user != task.author:
#             return redirect('task_details', pk)
#         form = PhotoCreateForm(request.POST, request.FILES)
#         if form.is_valid():
#             photo = form.save(commit=False)
#             photo.task = task
#             photo.save()
#             return redirect('task_details', pk)
#         return render(request, self.template_name, {'form': form, 'task': task})


# class PhotoDetailsView(View):
#     template_name = 'tasks/photo_details.html'

#     def get(self, request, pk):
#         photo = get_object_or_404(Photo, pk=pk)
#         photo_tags = PhotoTag.objects.filter(photo=photo)
#         photo_comments = PhotoComment.objects.filter(photo=photo)
#         form = PhotoCommentForm()
#         return render(request, self.template_name, {
#             'photo': photo,
#             'photo_tags': photo_tags,
#             'photo_comments': photo_comments,
#             'form': form
#         })

#     def post(self, request, pk):
#         photo = get_object_or_404(Photo, pk=pk)
#         form = PhotoCommentForm(request.POST)
#         if form.is_valid():
#             comment = form.save(commit=False)
#             comment.photo = photo
#             comment.commenter = request.user.username
#             comment.save()
#             return redirect('photo_details', pk)
#         photo_tags = PhotoTag.objects.filter(photo=photo)
#         photo_comments = PhotoComment.objects.filter(photo=photo)
#         return render(request, self.template_name, {
#             'photo': photo,
#             'photo_tags': photo_tags,
#             'photo_comments': photo_comments,
#             'form': form
#         })


# class PhotoUpdateView(View):
#     template_name = 'tasks/photo_update.html'

#     def get(self, request, pk):
#         photo = get_object_or_404(Photo, pk=pk)
#         if request.user != photo.task.author:
#             return redirect('task_details', photo.task.id)
#         form = PhotoCreateForm(instance=photo)
#         return render(request, self.template_name, {'form': form})

#     def post(self, request, pk):
#         photo = get_object_or_404(Photo, pk=pk)
#         if request.user != photo.task.author:
#             return redirect('task_details', photo.task.id)
#         form = PhotoCreateForm(request.POST, request.FILES, instance=photo)
#         if form.is_valid():
#             form.save()
#             return redirect('photo_details', pk)
#         return render(request, self.template_name, {'form': form})


# class PhotoDeleteView(View):
#     template_name = 'tasks/photo_delete.html'

#     def get(self, request, pk):
#         photo = get_object_or_404(Photo, pk=pk)
#         if request.user != photo.task.author:
#             return redirect('task_details', photo.task.id)
#         return render(request, self.template_name, {'photo': photo})

#     def post(self, request, pk):
#         photo = get_object_or_404(Photo, pk=pk)
#         if request.user != photo.task.author:
#             return redirect('task_details', photo.task.id)
#         task_id = photo.task.id
#         photo.delete()
#         return redirect('task_details', task_id)
