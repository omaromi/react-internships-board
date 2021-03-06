from django.http import JsonResponse
from .models import Staff, Company, Internship
from .serializers import InternshipSerializer, StaffSerializer, CompanySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


def StaffList(request):
    Staffs = Staff.objects.all()

    serializer = StaffSerializer(Staffs,many=True)

    return JsonResponse({'staffs':serializer.data},safe=False)

def StaffNames(request):
    Staffs = Staff.objects.all()
    serializer = StaffSerializer(Staffs,many=True)
    StaffNames = [x['name'] for x in serializer.data]
    return JsonResponse({'staffnames':StaffNames}, safe=False)

def CompanyNames(request):
    Companys = Company.objects.all()
    serializer = CompanySerializer(Companys,many=True)
    CompanyNames = [x['name'] for x in serializer.data]
    return JsonResponse({'companynames':CompanyNames}, safe=False)


@api_view(['GET', 'POST'])
def CompanyList(request):
    if request.method == 'GET':
        Companys = Company.objects.all()
        serializer = CompanySerializer(Companys,many=True)
        return JsonResponse(serializer.data,safe=False)

    if request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def InternshipsList(request):
    if request.method == 'GET':
        Internships = Internship.objects.all()
        serializer = InternshipSerializer(Internships, many=True)
        return JsonResponse({'internships':serializer.data},safe=False)
    
    if request.method == 'POST':
        serializer = InternshipSerializer(data=request.data)
        # you need to do this in any foreignkey situation because this helps you bypass the validation of the data.
        # first you initialize the variable, then you save it into the serializer, kinda like overriding the validation.
        # without doing this, validated_data will delete the key-value pairs in the request.data and in the long run, 
        # it will either not work, or show up as null value 
        staff = request.data.get('staff')
        company =request.data.get('company')
        if serializer.is_valid():
            serializer.save(staff=staff,company=company)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST','DELETE'])
def InternshipDetail(request,id):

    try:
        posting = Internship.objects.get(pk=id)
    except Internship.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = InternshipSerializer(posting)
        return JsonResponse(serializer.data)
    elif request.method == 'POST':
        serializer = InternshipSerializer(posting, data=request.data)
        staff = Staff.objects.get(name=(request.data.get('staff')))
        company = Company.objects.get(name=(request.data.get('company')))
        if serializer.is_valid():
            serializer.save(staff=staff,company=company)
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        posting.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# def staff_internships(request,staff_id):
#     return # unsure yet