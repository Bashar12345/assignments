"""
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from users import views as users_view



urlpatterns = [
    path('login/', users_view.login_page, name='user_login'),
    path('registration/',users_view.registration_page, name='user_reg'),
    path("logout", users_view.logout_request, name= "logout"),
    
]
