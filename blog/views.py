from django.shortcuts import render
from django.http import JsonResponse
from .models import News
from .forms import NewsForm

def object_list(request):
    form = NewsForm(request.POST or None)
    if request.is_ajax():
        if form.is_valid():
            instance = form.save()
        return JsonResponse({
            'title': instance.title,
            'body': instance.body,
        })

    context = {
        'form':form,
    }
    return render(request, 'blog/main.html',context)

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


