from .models import UserModel
from xadmin import views
import xadmin


class UserModelAdmin(object):
    list_display = ['U_name', 'U_role', 'U_level']     #显示列表
    search_fields = ['U_name', 'U_role', 'U_level']                 #创建搜索栏
    list_filter = ['U_name', 'U_role', 'U_level']              #创建过滤器

xadmin.site.register(UserModel, UserModelAdmin)