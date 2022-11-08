from django.db import models

# Create your models here.
class comma_separated_integers(models.Model):
    list_itself = models.CharField(max_length=80)

    def __str__(self):
        return self.list_itself
    

    # def save(self, *args, **kwargs):
    #     self.list_itself = sorted(self.list_itself, reverse=True)
    #     # sorting the array/list in the overriding save 
    #     print(self.list_itself)
    #     super(comma_separated_integers, self).save(*args, **kwargs)



