from django.shortcuts import render

def object_list(request):
    return render(request, 'blog/main.html')
