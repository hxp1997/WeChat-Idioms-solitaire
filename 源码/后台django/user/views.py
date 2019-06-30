import json

from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from django.http import HttpResponse
from user.models import UserModel


class Rankviews(APIView):
    def get(self, request):
        user = UserModel.objects.all().order_by('-U_level')
        d = {}
        user_list = []
        for u in user:
            user_one = [u.U_name, u.U_level, u.U_role]
            user_list.append(user_one)

        return HttpResponse(json.dumps({'user_list': user_list}), content_type="application/json")

        # user_list = [u.U_name for u in user]

    def post(self, request):
        username = request.data["nickName"]
        userrole = request.data["role"]
        userlevel = request.data["level"]
        print(username)
        print(userrole)
        print(request.data)
        try:
            find1 = UserModel.objects.filter(U_name=username).first()
        except:
            find1 = None
        if (find1):
            find2 = UserModel.objects.filter(U_name=username, U_role=userrole).first()
            # find2 = find1.objects.filter(U_role=userrole).first()
            if find2:
                if int(userlevel) > int(find2.U_level):
                    find2.U_level = userlevel
                    find2.save()
            else:
                user = UserModel()
                user.U_name = username
                user.U_level = userlevel
                user.U_role = userrole
                user.save()
                return HttpResponse(status=200)
        else:
            user = UserModel()
            user.U_name= username
            user.U_level = userlevel
            user.U_role = userrole
            # print(user.role)
            user.save()
            return HttpResponse(status=200)
        return HttpResponse(status=200)

