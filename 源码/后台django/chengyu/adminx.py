from .models import WordModel1,WordModel2,WordModel3,WordModel4,WordModel5,WordModel6,WordModel7,WordModel8,WordModel9,WordModel10,WordModel11,WordModel12,WordModel13,WordModel14,WordModel15,WordModel16,WordModel17,WordModel18,WordModel19,WordModel20
from xadmin import views
import xadmin

# -*- coding: utf-8 -*-


class BaseSetting(object):    #主题
    enable_themes = True
    use_bootswatch = True


class GlobalSettings(object):    #修改名字
    site_title = '成语接龙'
    site_footer = '成语接龙管理后台'
    menu_style = 'accordion'     #可以自定义菜单


class WordModelAdmin(object):
    list_display = ['W_ans', 'W_init', 'W_finish']     #显示列表
    search_fields = ['W_ans', 'W_init', 'W_finish']                 #创建搜索栏
    list_filter = ['W_ans', 'W_init', 'W_finish']              #创建过滤器


xadmin.site.register(views.BaseAdminView, BaseSetting)   #主题注册
xadmin.site.register(views.CommAdminView, GlobalSettings)  #名字更改
xadmin.site.register(WordModel1, WordModelAdmin)
xadmin.site.register(WordModel2, WordModelAdmin)
xadmin.site.register(WordModel3, WordModelAdmin)
xadmin.site.register(WordModel4, WordModelAdmin)
xadmin.site.register(WordModel5, WordModelAdmin)
xadmin.site.register(WordModel6, WordModelAdmin)
xadmin.site.register(WordModel7, WordModelAdmin)
xadmin.site.register(WordModel8, WordModelAdmin)
xadmin.site.register(WordModel9, WordModelAdmin)
xadmin.site.register(WordModel10, WordModelAdmin)

xadmin.site.register(WordModel11, WordModelAdmin)
xadmin.site.register(WordModel12, WordModelAdmin)
xadmin.site.register(WordModel13, WordModelAdmin)
xadmin.site.register(WordModel14, WordModelAdmin)
xadmin.site.register(WordModel15, WordModelAdmin)
xadmin.site.register(WordModel16, WordModelAdmin)
xadmin.site.register(WordModel17, WordModelAdmin)
xadmin.site.register(WordModel18, WordModelAdmin)
xadmin.site.register(WordModel19, WordModelAdmin)
xadmin.site.register(WordModel20, WordModelAdmin)
