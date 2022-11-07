from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User as DefaultDjUser
#from . models import User


# Create your forms here.

class NewUserForm(UserCreationForm):
    pos_choices = (('jweb', 'Junior Web Developer'), ('sweb', 'Senior Web Developer'), ('pmanager','Project Manager'),)

    #username =forms.CharField(required=True)
    email = forms.EmailField(required=True)
    position = forms.ChoiceField(choices=pos_choices)
    

    class Meta:
        model = DefaultDjUser

        fields = ('username', 'email','position',"password1", "password2")
        # widgets = {
        #     'position': forms.Select(attrs={'class': 'form-select'}, choices=pos_choices),
        # }

    def save(self, commit=True):
        user = super(NewUserForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user