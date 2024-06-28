from django import forms
from .models import Project, Task
from django.contrib.auth.models import User


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ["name", "description", "members"]
        widgets = {
            "name": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Project Name"}
            ),
            "description": forms.Textarea(
                attrs={
                    "class": "form-control",
                    "rows": 3,
                    "placeholder": "Project Description",
                }
            ),
            'members': forms.CheckboxSelectMultiple(),
        }


class TaskForm(forms.ModelForm):
    assigned_to = forms.ModelMultipleChoiceField(queryset=User.objects.all(), widget=forms.CheckboxSelectMultiple)
    class Meta:
        model = Task
        fields = ["title", "description", "assigned_to", "status"]
        widgets = {
            "title": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Task Title"}
            ),
            "description": forms.Textarea(
                attrs={
                    "class": "form-control",
                    "rows": 3,
                    "placeholder": "Task Description",
                }
            ),
            # "assigned_to": forms.SelectMultiple(attrs={"class": "form-control"}),
            "status": forms.Select(attrs={"class": "form-control"}),
        }


class AssignUsersForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ["members"]
        widgets = {
            "members": forms.SelectMultiple(attrs={"class": "form-control"}),
        }


class AssignUsersToTaskForm(forms.ModelForm):
    assigned_to = forms.ModelMultipleChoiceField(queryset=User.objects.all(), widget=forms.CheckboxSelectMultiple)

    class Meta:
        model = Task
        fields = ['assigned_to']
        widgets = {
            'assigned_to': forms.CheckboxSelectMultiple(attrs={'class': 'form-check-input'}),
        }