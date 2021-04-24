from django.shortcuts import render
from django.http import JsonResponse
from .models import News

def object_list(request):
    return render(request, 'blog/main.html')

def helloworld_show(request):
    return JsonResponse({'text':'Hello-world'})


def get_data_views(request):
    qs = News.objects.all()
    data = []
    for obj in qs:
        item = {
            'title': obj.title,
            'body': obj.body
        }
        data.append(item)
    return JsonResponse({'data':data})


