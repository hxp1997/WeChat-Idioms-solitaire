# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-05-23 13:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chengyu', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='WordModel10',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('W_ans', models.CharField(max_length=200, verbose_name='答案')),
                ('W_init', models.CharField(max_length=200, verbose_name='初始位置')),
                ('W_finish', models.CharField(max_length=200, verbose_name='最终位置')),
            ],
            options={
                'verbose_name': '成语数据表-关卡十',
                'verbose_name_plural': '成语数据表-关卡十',
            },
        ),
        migrations.CreateModel(
            name='WordModel2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('W_ans', models.CharField(max_length=200, verbose_name='答案')),
                ('W_init', models.CharField(max_length=200, verbose_name='初始位置')),
                ('W_finish', models.CharField(max_length=200, verbose_name='最终位置')),
            ],
            options={
                'verbose_name': '成语数据表-关卡二',
                'verbose_name_plural': '成语数据表-关卡二',
            },
        ),
        migrations.CreateModel(
            name='WordModel3',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('W_ans', models.CharField(max_length=200, verbose_name='答案')),
                ('W_init', models.CharField(max_length=200, verbose_name='初始位置')),
                ('W_finish', models.CharField(max_length=200, verbose_name='最终位置')),
            ],
            options={
                'verbose_name': '成语数据表-关卡三',
                'verbose_name_plural': '成语数据表-关卡三',
            },
        ),
        migrations.CreateModel(
            name='WordModel4',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('W_ans', models.CharField(max_length=200, verbose_name='答案')),
                ('W_init', models.CharField(max_length=200, verbose_name='初始位置')),
                ('W_finish', models.CharField(max_length=200, verbose_name='最终位置')),
            ],
            options={
                'verbose_name': '成语数据表-关卡四',
                'verbose_name_plural': '成语数据表-关卡四',
            },
        ),
        migrations.CreateModel(
            name='WordModel5',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('W_ans', models.CharField(max_length=200, verbose_name='答案')),
                ('W_init', models.CharField(max_length=200, verbose_name='初始位置')),
                ('W_finish', models.CharField(max_length=200, verbose_name='最终位置')),
            ],
            options={
                'verbose_name': '成语数据表-关卡五',
                'verbose_name_plural': '成语数据表-关卡五',
            },
        ),
        migrations.CreateModel(
            name='WordModel6',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('W_ans', models.CharField(max_length=200, verbose_name='答案')),
                ('W_init', models.CharField(max_length=200, verbose_name='初始位置')),
                ('W_finish', models.CharField(max_length=200, verbose_name='最终位置')),
            ],
            options={
                'verbose_name': '成语数据表-关卡六',
                'verbose_name_plural': '成语数据表-关卡六',
            },
        ),
        migrations.CreateModel(
            name='WordModel7',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('W_ans', models.CharField(max_length=200, verbose_name='答案')),
                ('W_init', models.CharField(max_length=200, verbose_name='初始位置')),
                ('W_finish', models.CharField(max_length=200, verbose_name='最终位置')),
            ],
            options={
                'verbose_name': '成语数据表-关卡七',
                'verbose_name_plural': '成语数据表-关卡七',
            },
        ),
        migrations.CreateModel(
            name='WordModel8',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('W_ans', models.CharField(max_length=200, verbose_name='答案')),
                ('W_init', models.CharField(max_length=200, verbose_name='初始位置')),
                ('W_finish', models.CharField(max_length=200, verbose_name='最终位置')),
            ],
            options={
                'verbose_name': '成语数据表-关卡八',
                'verbose_name_plural': '成语数据表-关卡八',
            },
        ),
        migrations.CreateModel(
            name='WordModel9',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('W_ans', models.CharField(max_length=200, verbose_name='答案')),
                ('W_init', models.CharField(max_length=200, verbose_name='初始位置')),
                ('W_finish', models.CharField(max_length=200, verbose_name='最终位置')),
            ],
            options={
                'verbose_name': '成语数据表-关卡九',
                'verbose_name_plural': '成语数据表-关卡九',
            },
        ),
        migrations.RenameModel(
            old_name='WordModel',
            new_name='WordModel1',
        ),
        migrations.AlterModelOptions(
            name='wordmodel1',
            options={'verbose_name': '成语数据表-关卡一', 'verbose_name_plural': '成语数据表-关卡一'},
        ),
    ]
