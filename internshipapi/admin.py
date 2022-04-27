from django.contrib import admin
from .models import Staff, Company, Internship

# Register your models here.

admin.site.register(Staff)
admin.site.register(Company)
admin.site.register(Internship)
