<%--
  Created by IntelliJ IDEA.
  User: MSI
  Date: 2018/12/12
  Time: 15:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>用户信息</title>
    <!--cs-->
    <link rel="stylesheet" href="css/UserInform.css">


    <!--js-->
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript " src="js/UserInform.js"></script>

</head>
<body>
<div class="medial" id="tt">
    <div class="medial-box">
        <h1>用户信息</h1>
    </div>
        <div class="loginBoxText" >
            <form action="#" method="post" onsubmit="return checkForm()">
            <div class="inputBox" >
                <div style="margin: auto;width: 100px; height: 100px;">
                    <img src="UploadFiles/${sessionScope.image}" style="width: 100px; height: 100px;"/>
                </div>
                <div style="margin: auto;width: 80px; ">
                    <a href="upload.jsp">更改头像</a>
                </div>
            </div>
            <div class="inputBox">
                <label>昵称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input class="input" type="text" id="name" name="name" placeholder="请输入昵称" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="inputBox">
                <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input class="input" type="text" id="email" name="useremail" placeholder="请输入邮箱"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="inputBox">
                <label>电话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input class="input" type="text" id="phone" name="usertel" placeholder="请输入电话号码"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="inputBox">
                <label>介绍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <textarea  class="input" type="text" name="userinfo" id="userText" placeholder="请输入介绍" ></textarea> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <font id="error" color="red" class="error"></font>
            </div>
            <div class="Button-box">
                <input class="Button" type="submit" value="保存" />
            </div>
            <div class="Button-box">
                <input class="Button" type="button" value="取消" onclick="back()" />
            </div>
            </form>
        </div>
</div>
</body>
</html>
