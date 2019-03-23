<%--
  Created by IntelliJ IDEA.
  User: MSI
  Date: 2018/12/7
  Time: 15:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>智慧校园-基于GIS的视频监控系统-注册</title>

    <!--css-->
    <link rel="stylesheet" href="css/log.css" />

    <!--js-->
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/register.js"></script>
</head>
<body>
<div class="loginBackground" id="tt">
    <div style="height: 120px;padding-top: 50px;">
    </div>
    <div class="loginBoxMargin" id="rr">
        <div class="boxHeader" >
            <div class="loginBoxHeader" id="login">
                <h2>注册</h2>
            </div>
        </div>
        <div id="signBox" class="table">
            <form action="register.action" method="post" onsubmit="return checkForm()">
                <div class="loginBoxText">
                    <div class="inputBox">
                        <h3>账号</h3>
                        <input class="input" type="text" name="username" id="userName" placeholder="请输入账号" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div class="inputBox">
                        <h3>电话</h3>
                        <input class="input" type="text" name="usertel" id="userTel" placeholder="请输入手机电话号码" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div class="inputBox">
                        <h3>邮箱</h3>
                        <input class="input" type="text" name="useremail" id="userEmail" placeholder="请输入邮箱" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div class="inputBox">
                        <h3>名字</h3>
                        <input class="input" type="text" name="userrmark" id="userRmark" placeholder="请输入名字" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div class="inputBox">
                        <h3>秘钥</h3>
                        <input class="input" type="password" name="passwordadm" id="passwordAdm" placeholder="请输入管理员/超级管理员秘钥" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div class="inputBox">
                        <h3>密码</h3>
                        <input class="input" type="password" name="password" id="password" placeholder="请输入密码" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div class="inputBox">
                        <h3>确认密码</h3>
                        <input class="input" type="password" id="MuserPwdSure" name="muserpwdsure" placeholder="请确认密码（6位）"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <font id="error" color="red" class="error"></font>
                    </div>
                    <div class="inputBox">
                        <a href="login.jsp"  role="button">返回登陆</a>
                    </div>
                </div>
                <input class="loginButton" type="submit" value="注册" />
            </form>
        </div>
    </div>
</div>
</body>
</html>
