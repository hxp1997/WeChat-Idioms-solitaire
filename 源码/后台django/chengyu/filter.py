import django_filters
from .models import WordModel

__author__ = 'LinXi'
__time__   = '2018/5/16 17:39'
# -*- coding: utf-8 -*-


class WordModelFilter(django_filters.rest_framework.FilterSet):

    class Meta:
        model = WordModel
        fields = ['W_level']

