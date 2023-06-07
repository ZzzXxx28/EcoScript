from django.shortcuts import render
from django.http import JsonResponse
from .ml_model import make_predictions

def index(request):
    return render(request, 'index.html')

def upload(request):
    if request.method == 'POST' and request.FILES['file']:
        file = request.FILES['file']
        image = Image.open(file)
        predict = make_predictions(image)
        return JsonResponse({'class': predict})
    return JsonResponse({'error': 'No file uploaded.'})

