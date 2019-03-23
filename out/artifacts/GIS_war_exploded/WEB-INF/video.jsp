<%--
  Created by IntelliJ IDEA.
  User: MSI
  Date: 2018/12/12
  Time: 14:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
    <meta name="renderer" content="webkit">


    <title>智慧校园-基于GIS的视频监控系统-监控页面</title>
    <!--css-->
    <link rel="stylesheet" href="css/video.css">

    <!--js-->
    <script src="js/ezuikit.js"></script>
    <script src="js/video.js"></script>
    <script type="text/javascript" src="js/canvas-particle.js"></script>
    <script type="text/javascript" src="js/jquery.js"></script>
</head>
<body id="tt">
<div id="mydiv">
    <div class="mydiv-box" >
        <div class="mydiv-box-a" >
            <video id="myPlayer" poster="" controls playsInline webkit-playsinline autoplay>
                <source src="http://hls.open.ys7.com/openlive/a83f8bd82c3e4afda27ea9049dc18b3b.hd.m3u8" type="application/x-mpegURL" />
            </video>
        </div>
    </div>
</div>
<script>
    //加载视频
    var player = new EZUIPlayer('myPlayer');
    function log(str){
        var div = document.createElement('DIV');
        div.innerHTML = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
        document.body.appendChild(div);
    }

</script>
</body>
</html>
