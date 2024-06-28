
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('projects/', include('projects.urls')),
    path('accounts/', include('django.contrib.auth.urls')),  # For user authentication
    path('', RedirectView.as_view(url='/projects/', permanent=True)),  # Redirect root to 'projects'
]
