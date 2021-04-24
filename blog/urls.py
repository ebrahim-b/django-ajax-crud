from django.urls import path
from .views import object_list, helloworld_show

app_name = 'blog'

urlpatterns = [
    path('', object_list , name='object-list'),
    path('hello/', helloworld_show, name='hello-world'),
]