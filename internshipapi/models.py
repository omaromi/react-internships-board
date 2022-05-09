from django.db import models
from datetime import date

# Create your models here.

class Staff(models.Model):
    name = models.CharField(max_length=150)
    position = models.CharField(max_length=200)
    email = models.EmailField(blank=True)

    def __str__(self):
        return self.name

class Company(models.Model):
    name = models.CharField(max_length=200)
    org_partner = models.BooleanField()
    website = models.URLField()
    location = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.name

class Internship(models.Model):
    position_title = models.CharField(max_length=200)
    postdate = models.DateField(default=date.today)
    app_link= models.URLField()
    description = models.TextField(blank=True)
    duedate = models.DateField(null=True)
    staff = models.ForeignKey(Staff, null=True, related_name='internships', on_delete= models.SET_NULL)
    company = models.ForeignKey(Company, null=True, related_name='internships', on_delete= models.SET_NULL)

    def __str__(self):
        return f'{self.company}-{self.position_title}-{self.postdate}'
