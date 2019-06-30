from rest_framework import serializers
from chengyu.models import WordModel1,WordModel2,WordModel3,WordModel4,WordModel5,WordModel6,WordModel7,WordModel8,WordModel9,WordModel10

# -*- coding: utf-8 -*-


class WordModelSerializer(serializers.Serializer):
    W_level = serializers.IntegerField(required=True)
