from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import Project, Task
from .forms import AssignUsersForm, AssignUsersToTaskForm, ProjectForm, TaskForm

@login_required
def project_list(request):
    projects = Project.objects.filter(members=request.user)
    if not projects.exists():
        return redirect('project_create')
    return render(request, 'projects/projects_list.html', {'projects': projects})

@login_required
def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    if request.user not in project.members.all():
        return redirect('project_list')
    tasks = Task.objects.filter(project=project)
    return render(request, 'projects/project_detail.html', {'project': project, 'tasks': tasks})

@login_required
def project_create(request):
    if request.method == 'POST':
        form = ProjectForm(request.POST)
        if form.is_valid():
            project = form.save()
            project.members.add(request.user)
            return redirect('project_list')
    else:
        form = ProjectForm()
    return render(request, 'projects/project_form.html', {'form': form})

@login_required
def project_update(request, pk):
    project = get_object_or_404(Project, pk=pk)
    if request.user not in project.members.all():
        return redirect('project_list')
    
    if request.method == 'POST':
        form = ProjectForm(request.POST, instance=project)
        if form.is_valid():
            form.save()
            return redirect('project_detail', pk=pk)
    else:
        form = ProjectForm(instance=project)
    
    return render(request, 'projects/project_form.html', {'form': form})

@login_required
def assign_users(request, pk):
    project = get_object_or_404(Project, pk=pk)
    if request.user not in project.members.all():
        return redirect('project_list')

    if request.method == 'POST':
        form = AssignUsersForm(request.POST, instance=project)
        if form.is_valid():
            form.save()
            return redirect('project_detail', pk=pk)
    else:
        form = AssignUsersForm(instance=project)
    
    return render(request, 'projects/assign_users.html', {'form': form, 'project': project})

@login_required
def task_create(request, project_pk):
    project = get_object_or_404(Project, pk=project_pk)
    if request.user not in project.members.all():
        return redirect('project_list')

    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            task = form.save(commit=False)
            task.project = project
            task.save()
            return redirect('project_detail', pk=project_pk)
    else:
        form = TaskForm()
    
    return render(request, 'projects/task_form.html', {'form': form, 'project': project})

@login_required
def task_update(request, project_pk, task_pk):
    project = get_object_or_404(Project, pk=project_pk)
    if request.user not in project.members.all():
        return redirect('project_list')

    task = get_object_or_404(Task, pk=task_pk)
    if task.project != project:
        return redirect('project_detail', pk=project_pk)

    if request.method == 'POST':
        form = TaskForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('project_detail', pk=project_pk)
    else:
        form = TaskForm(instance=task)
    
    return render(request, 'projects/task_form.html', {'form': form, 'project': project})


@login_required
def assign_task_users(request, project_pk, task_pk):
    project = get_object_or_404(Project, pk=project_pk)
    if request.user not in project.members.all():
        return redirect('project_list')

    task = get_object_or_404(Task, pk=task_pk)
    if task.project != project:
        return redirect('project_detail', pk=project_pk)

    if request.method == 'POST':
        form = AssignUsersToTaskForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('project_detail', pk=project_pk)
    else:
        form = AssignUsersToTaskForm(instance=task)

    return render(request, 'projects/assign_task_users.html', {'form': form, 'task': task, 'project': project})



@login_required
def update_task_status(request, project_pk, task_pk):
    project = get_object_or_404(Project, pk=project_pk)
    if request.user not in project.members.all():
        return redirect('project_list')

    task = get_object_or_404(Task, pk=task_pk)
    if task.project != project:
        return redirect('project_detail', pk=project_pk)

    if request.method == 'POST':
        # Handle status update logic here
        task.status = request.POST['status']
        task.save()
        return redirect('project_detail', pk=project_pk)
    
    return render(request, 'projects/update_task_status.html', {'task': task, 'project': project})
