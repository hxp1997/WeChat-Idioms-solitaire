# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-05-24 12:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('U_name', models.CharField(default='', max_length=50, verbose_name='用户昵称')),
                ('U_level', models.CharField(default='', max_length=50, verbose_name='关卡个数')),
                ('U_role', models.CharField(default='', max_length=50, verbose_name='角色')),
            ],
            options={
                'verbose_name': '用户',
                'verbose_name_plural': '用户',
            },
        ),
    ]
