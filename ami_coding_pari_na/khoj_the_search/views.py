from django.shortcuts import render
from . models import comma_separated_integers

# Create your views here.

def home_page(request):
    if request.method == 'POST' and request.POST.get('string_input'):
        comma_list = comma_separated_integers()
        test_print = request.POST.get('string_input')
        print(test_print)
        #comma_list.list_itself = request.POST.get('string_input')
        #comma_list.save()
        boolean_val = bool()
        return render(request, 'home.html',{"boolean_val":boolean_val})
    return render(request, 'home.html')