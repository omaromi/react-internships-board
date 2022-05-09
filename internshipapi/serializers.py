from rest_framework import serializers
from .models import Staff, Company, Internship


class StaffSerializer(serializers.ModelSerializer):
    # internships = serializers.StringRelatedField(many=True)
    
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

    def create(self, validated_data):
        #it's important to pop the value and not just reference the value using object['key'] notation 
        # because otherwise it will try to reference multiple spots. This is where we turn it from a string 
        # into the actual model object. from Omar a string to Omar the actual staff object in the database
        staff= Staff.objects.get(name=validated_data.pop('staff'))
        company= Company.objects.get(name=validated_data.pop('company'))
        internship = Internship.objects.create(company=company,staff=staff, **validated_data)
        return internship

    
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
