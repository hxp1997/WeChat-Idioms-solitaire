from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework import mixins
from rest_framework import viewsets
from .models import WordModel1,WordModel2,WordModel3,WordModel4,WordModel5,WordModel6,WordModel7,WordModel8,WordModel9,WordModel10,WordModel11,WordModel12,WordModel13,WordModel14,WordModel15,WordModel16,WordModel17,WordModel18,WordModel19,WordModel20
from .serializers import WordModelSerializer
import random

# Create your views here.


class WordModelViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = WordModelSerializer
    # pagination_class = GroupMembersPagination

    def create(self, request, *args, **kwargs):
        res_data = []
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            get_w_level = serializer.validated_data["W_level"]
            headers = self.get_success_headers(serializer.data)
            if get_w_level == 1:
                my_model = WordModel1
            if get_w_level == 2:
                my_model = WordModel11
            if get_w_level == 3:
                my_model = WordModel2
            if get_w_level == 4:
                my_model = WordModel12
            if get_w_level == 5:
                my_model = WordModel3
            if get_w_level == 6:
                my_model = WordModel13
            if get_w_level == 7:
                my_model = WordModel4
            if get_w_level == 8:
                my_model = WordModel14
            if get_w_level == 9:
                my_model = WordModel5
            if get_w_level == 10:
                my_model = WordModel15
            if get_w_level == 11:
                my_model = WordModel6
            if get_w_level == 12:
                my_model = WordModel16
            if get_w_level == 13:
                my_model = WordModel7
            if get_w_level == 14:
                my_model = WordModel17
            if get_w_level == 15:
                my_model = WordModel8
            if get_w_level == 16:
                my_model = WordModel18
            if get_w_level == 17:
                my_model = WordModel9
            if get_w_level == 18:
                my_model = WordModel19
            if get_w_level == 19:
                my_model = WordModel10
            if get_w_level == 20:
                my_model = WordModel20
            if get_w_level:


                get_word = my_model.objects.filter(id=random.randint(1 , 5))
                for i in get_word:
                    params = {
                        "id": i.id,
                        "W_ans": i.W_ans,
                        "W_init": i.W_init,
                        "W_finish": i.W_finish,
                    }
                    res_data.append(params)
            return Response({
                    "send": 'send success!!',
                    "res_video": res_data,
                }, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response({
                "send": 'get word failed!!'
            }, status=status.HTTP_400_BAD_REQUEST)

