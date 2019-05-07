<%--
  Created by IntelliJ IDEA.
  User: MSI
  Date: 2018/12/12
  Time: 15:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>智慧校园-基于GIS的视频监控系统-密码修改</title>
    <!--css-->
    <link rel="stylesheet" href="css/log.css" />

    <!--js-->
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/Modify.js"></script>
</head>
<body>
<div class="loginBackground" id="tt">
    <div class="loginBackground-box"></div>
    <div class="loginBoxMargin">
        <div class="boxHeader" >
            <div class="loginBoxHeader" id="login">
                <h2>密码修改</h2>
            </div>
        </div>
        <div id="signBox" class="table">
            <form action="modify.action" method="post" onsubmit="return checkForm()">
                <div class="loginBoxText">
                    <div class="inputBox">
                        <label>旧密码&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input class="input" type="password" id="oderuserPwd" name="oderuserpwd" placeholder="请输旧入密码" />
                    </div>
                    <div class="inputBox">
                        <label>新密码&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input class="input" type="password" id="MuserPwd" name="muserpwd" placeholder="请输入密码" />
                    </div>
                    <div class="inputBox">
                        <label>确认密码&nbsp;</label>
                        <input class="input" type="password" id="MuserPwdSure" name="muserpwdsure" placeholder="请确认密码"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <font id="error" color="red" class="error"></font>
                    </div>
                </div>
                <input class="loginButton" type="submit" value="修改" />
            </form>
        </div>
    </div>
</div>
</body>
</html>
