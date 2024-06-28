# projects/tests.py

from django.test import TestCase
from django.contrib.auth.models import User
from .models import Project, Task

class ProjectManagementTestCase(TestCase):

    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user(username='testuser', password='password')
        self.client.login(username='testuser', password='password')  # Log in user

        # Create a test project
        self.project = Project.objects.create(name='Test Project', description='Test Project Description')
        self.project.members.add(self.user)

        # Create a test task
        self.task = Task.objects.create(
            project=self.project,
            title='Test Task',
            description='Test Task Description',
            assigned_to=self.user,
            status='todo'
        )

    def test_project_creation(self):
        project = Project.objects.get(name='Test Project')
        self.assertEqual(project.description, 'Test Project Description')
        self.assertIn(self.user, project.members.all())

    def test_task_creation(self):
        task = Task.objects.get(title='Test Task')
        self.assertEqual(task.description, 'Test Task Description')
        self.assertEqual(task.assigned_to, self.user)
        self.assertEqual(task.status, 'todo')

    def test_project_list_view(self):
        response = self.client.get('/projects/')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Test Project')

    def test_project_detail_view(self):
        response = self.client.get(f'/projects/{self.project.pk}/')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Test Task')

    def test_task_creation_view(self):
        response = self.client.post(f'/projects/{self.project.pk}/tasks/new/', {
            'title': 'New Test Task',
            'description': 'New Test Task Description',
            'assigned_to': self.user.id,
            'status': 'todo'
        })
        self.assertEqual(response.status_code, 302)  # Redirect after creation
        new_task = Task.objects.get(title='New Test Task')
        self.assertEqual(new_task.description, 'New Test Task Description')
        self.assertEqual(new_task.assigned_to, self.user)
        self.assertEqual(new_task.status, 'todo')
