from django.shortcuts import render


def index_en(request):
    return render(request, 'index_en.html')


def home_redirect(request):
    return render(request, 'index_en.html')
