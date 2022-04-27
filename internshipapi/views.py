from django.http import JsonResponse
from .models import Staff, Company, Internship
from .serializers import InternshipSerializer, StaffSerializer, CompanySerializer

def StaffList(request):
    Staffs = Staff.objects.all()

    serializer = StaffSerializer(Staffs,many=True)

    return JsonResponse({'staffs':serializer.data},safe=False)

def CompanyList(request):
    Companys = Company.objects.all()

    serializer = CompanySerializer(Companys,many=True)

    return JsonResponse(serializer.data,safe=False)

def InternshipsList(request):
    Internships = Internship.objects.all()

    serializer = InternshipSerializer(Internships, many=True)

    return JsonResponse({'internships':serializer.data},safe=False)


