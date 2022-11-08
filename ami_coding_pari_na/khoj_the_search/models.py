from django.db import models
from django.utils.timezone import datetime
from django.contrib.auth.models import User as DefaultDjUser

# Create your models here.
class comma_separated_integers(models.Model):
    user = models.ForeignKey(DefaultDjUser, on_delete=models.CASCADE)
    input_values = models.CharField(max_length=80)
    timestamp = models.DateTimeField(default=datetime.now)
    #date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.input_values
    

    # def save(self, *args, **kwargs):
    #     self.list_itself = sorted(self.list_itself, reverse=True)
    #     # sorting the array/list in the overriding save 
    #     print(self.list_itself)
    #     super(comma_separated_integers, self).save(*args, **kwargs)



