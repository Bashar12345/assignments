from django.db import models

# Create your models here.
class comma_separated_integers(models.Model):
    list_itself = models.CharField(max_length=80)

    def save(self, *args, **kwargs):
        self.list_itself = sorted(list_itself, reverse=True)
        super(comma_separated_integers, self).save(*args, **kwargs)