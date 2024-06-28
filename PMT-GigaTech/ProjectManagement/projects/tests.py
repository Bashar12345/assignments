from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User
from .models import Project, Task

class ProjectViewsTestCase(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client = Client()
        self.client.force_login(self.user)
        self.project = Project.objects.create(name='Test Project', description='Test Description')
        self.project.members.add(self.user)
        self.task_data = {
            'title': 'Test Task',
            'description': 'Test Task Description',
            'status': 'todo'
        }

    def test_project_list_view(self):
        response = self.client.get(reverse('project_list'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'projects/project_list.html')

    def test_project_detail_view(self):
        response = self.client.get(reverse('project_detail', args=[self.project.pk]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'projects/project_detail.html')

    def test_project_create_view(self):
        response = self.client.get(reverse('project_create'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'projects/project_form.html')

        response = self.client.post(reverse('project_create'), {
            'name': 'New Project',
            'description': 'New Project Description'
        })
        self.assertEqual(response.status_code, 302)  # Check if redirecting after successful creation

    def test_task_create_view(self):
        response = self.client.get(reverse('task_create', args=[self.project.pk]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'projects/task_form.html')

        response = self.client.post(reverse('task_create', args=[self.project.pk]), self.task_data)
        self.assertEqual(response.status_code, 302)  # Check if redirecting after successful creation

    def test_assign_users_view(self):
        response = self.client.get(reverse('assign_users', args=[self.project.pk]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'projects/assign_users.html')

        response = self.client.post(reverse('assign_users', args=[self.project.pk]), {
            'members': [self.user.pk]  # Assuming members is a list of user IDs
        })
        self.assertEqual(response.status_code, 302)  # Check if redirecting after successful assignment
