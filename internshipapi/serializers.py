from rest_framework import serializers
from .models import Staff, Company, Internship


class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class InternshipSerializer(serializers.ModelSerializer):
    staff = serializers.StringRelatedField()
    company = serializers.StringRelatedField()
    
    class Meta:
        model = Internship
        fields = '__all__'
        # fields = ['position_title',
    # 'postdate',
    # 'app_link',
    # 'description',
    # 'duedate',
    # 'staff',
    # 'company',]
