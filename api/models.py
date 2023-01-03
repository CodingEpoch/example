from django.db import models


class Expense(models.Model):
    name = models.CharField(max_length=255)
    amount = models.FloatField()
    date = models.DateField()
    one_time = models.BooleanField(default=False)

    def __str__(self):
        return self.name
