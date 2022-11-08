from django.shortcuts import render
from . models import comma_separated_integers
from django.contrib.auth.models import User as DefaultDjUser
from django.utils import timezone
# Create your views here.

def home_page(request):
    if request.method == 'POST' and request.POST.get('string_input'):

        #getting the form data 
        form_inserted_list =request.POST.get('string_input')
        form_searched_value = int(request.POST.get('inputted_search_key'))
        comma_list = comma_separated_integers()

        # sorting the list descending 
        the_int_list = map(int, form_inserted_list.split(","))
        sorted_the_list = sorted(the_int_list,reverse=True)


        #saving the data into database 
        print(request.user)
        comma_list.user =request.user
        comma_list.input_values = str(sorted_the_list)
        now_time=str(timezone.now())
        end_date, ext = now_time.split(' ')
        #print(end_date)
        comma_list.timestamp = end_date
        comma_list.save()

        #returning the result
        boolean_val = bool()
        if form_searched_value in sorted_the_list:
            boolean_val = True
        return render(request, 'home.html',{"boolean_val":boolean_val})
    
    return render(request, 'home.html')