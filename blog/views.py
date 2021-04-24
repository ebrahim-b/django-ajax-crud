from django.shortcuts import render
from django.http import JsonResponse

def object_list(request):
    return render(request, 'blog/main.html')

def helloworld_show(request):
    return JsonResponse({'text':'Hello-world'})
