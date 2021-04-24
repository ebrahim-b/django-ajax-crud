from django.urls import path
from .views import object_list, helloworld_show, get_data_views

app_name = 'blog'

urlpatterns = [
    path('', object_list , name='object-list'),
    path('hello/', helloworld_show, name='hello-world'),
    path('data/', get_data_views, name='get-data'),
]