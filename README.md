# HDSneakers
MyFirstWeb
因为用了opacity，RGB（，，，0.x）等css3效果，本页面适用于html8.0-10.0


主要分为以下三点：

##主页面
  1、主菜单js置顶
    对当前页面顶部距离监听，大于一定高度时改变菜单栏css效果即可完成
  2、图片轮播图，鼠标监听
  3、动态粒子jquery特效
    通过jquery库以及js引入一定数目的闪光粒子，纯黑背景以及z-index=-1;position=fixed;使特效作为最底层（相当于背景）。
  4、图片与超链接鼠标悬浮于上的效果。
    通过设置css: a/img:hover完成类似特效。
  5、iconfonts字体库配置
    从阿里在线库中下载资源配置于项目文件中，通过div导入相应矢量图。
    阿里在线字符库：https://www.iconfont.cn/
  demo：https://houzss1.github.io/HDSneakers/index.html
  
##发售日历
  json导入数据
    利用<span id="xxx"></span>
    js导入列表内容，自定义模板: document.getElementById("xxx").innerHTML=txt.sneakers[i];
  
##详细子页面
  分享button
    通过导入已有div
  参考网页：https://github.com/overtrue/share.js
  demo：https://houzss1.github.io/HDSneakers/news/001.html
