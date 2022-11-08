from django.shortcuts import render
from . models import comma_separated_integers

# Create your views here.

def home_page(request):
    if request.method == 'POST' and request.POST.get('string_input'):
        form_inserted_list =request.POST.get('string_input')
        form_search_value = request.POST.get('inputed_search_key')
        comma_list = comma_separated_integers()
        
        the_int_list = map(int, form_inserted_list.split(","))
        print(type(the_int_list))
        #print(the_int_list)
        sorted_the_list = sorted(a_int_list,reverse=True)
        #print(sorting_the_list)
        comma_list.list_itself = sorted_the_list
        comma_list.save()
        boolean_val = bool()
        return render(request, 'home.html',{"boolean_val":boolean_val})
    return render(request, 'home.html')