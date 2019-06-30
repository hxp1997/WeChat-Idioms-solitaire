from django.db import models

# Create your models here.



class UserModel(models.Model):
    U_name = models.CharField(max_length=50, verbose_name=u'用户昵称',default='')
    U_level = models.CharField(max_length=50, verbose_name=u'关卡个数', default='')
    U_role = models.CharField(max_length=50, verbose_name=u'角色', default='')

    class Meta:
        verbose_name = u'关卡记录表'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.U_name