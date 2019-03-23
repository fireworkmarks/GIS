<%--
  Created by IntelliJ IDEA.
  User: MSI
  Date: 2019/1/24
  Time: 20:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <title>智慧校园-基于GIS的视频监控系统-游客主页</title>

    <!--css-->
    <link href="css/index.css" rel="stylesheet">
    <link href="Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <link href="css/bootstrap.min2.css" rel="stylesheet">
    <link href="css/base.css" rel="stylesheet" type="text/css" />
    <link href="css/navbar.css" rel="stylesheet">
    <link href="css/ditu3.css" rel="stylesheet" type="text/css" />

    <!--js-->
    <script src="js/index.js"></script>
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/require.min.js" data-main="js/main"></script>
    <script src="js/bootstrap.min.js"></script>
</head>
<body>
<!-- 顶部导航栏 -->
<nav class="navbar navbar-default navbar-static-top " role="navigation" style="margin: 0 0;">
    <div class="container-fluid ">
        <div class="navbar-header">
            <a class="navbar-brand" >智慧校园视频监控系统</a>
        </div>
        <div>
            <ul class="nav navbar-nav ">
                <li><a role="button" id="distance">测距</a></li>
                <li><a role="button" id="area">测面积</a></li>
                <li><a role="button" id="height" >测高度</a></li>
                <li><a role="button" id="marker" >绘制地标</a></li>
                <li><a role="button" id="clear" >清除</a></li>
                <li><a role="button" id="she" >隐藏摄像头位置</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li ><a class="time">当前系统已浏览人数：${applicationScope.counter}</a></li>
                <li ><a id="showTime" class="time"></a></li>
                <li ><a class="time">游客${sessionScope.rmark}您好</a> </li>
                <li class="dropdown">
                    <a href="#" class="glyphicon glyphicon-user dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="flase" >
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu xu" >
                        <li><a href="Modify.html?username=${sessionScope.user}">修改密码</a></li>
                        <li><a href="UserInform.html?username=${sessionScope.user}">个人信息</a></li>
                        <li><a href="exit.action">退出</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- 顶部导航栏 -->

<!--信息框-->
<div class="content">
    <div class="content-left">
        <form action="#" method="post"  name="TForm"  target="n_iframe" style="height: 100%;">
            <div class="content-left-top">
                <p class="content-left-top-title">监控点位建筑信息</p>
                <div>
                    <h3 id="title" class="namey" ></h3>
                    <div class="imagey">
                        <img id="myimg" src="">
                    </div>
                    <p id="des" class="word text" ></p>
                </div>
            </div>
        </form>
        <iframe id="id_iframe" name="n_iframe" style="display:none;"></iframe><!--//设置name="TForm"的表单提交但不跳转 -->
    </div>

    <div id="cesiumContainer" class="content-right" ></div>
</div>
</body>
<script>
    $(document).ready(function ()
        {
            var show = document.getElementById("showTime");
            setInterval(function ()
            {
                var time = new Date();
                var m = time.getMonth() + 1;
                var t = time.getFullYear() + "-" + m + "-" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
                show.innerHTML = t;
            }, 1000);
        }
    )
</script>
</html>
