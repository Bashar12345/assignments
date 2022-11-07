from django.shortcuts import render,redirect
from . forms import NewUserForm
from django.contrib.auth import login
from django.contrib import messages

# Create your views here.

def login_page(request):
    title='login'

    return render(request, 'users/login.html',{'title':title})

def registration_page(request):
	if request.method == "POST":
		form = NewUserForm(request.POST)
		if form.is_valid():
			user = form.save()
			login(request, user)
			messages.success(request, "Registration successful." )
			return redirect("home")
		messages.error(request, "Unsuccessful registration. Invalid information.")
	form = NewUserForm()
    
	return render(request, 'users/registration.html',{'register_form':form})
    