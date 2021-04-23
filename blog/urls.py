from django.urls import path
from .views import object_list

app_name = 'blog'

urlpatterns = [
    path('', object_list , name='object-list')
]