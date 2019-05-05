<%--
  Created by IntelliJ IDEA.
  User: MSI
  Date: 2018/12/12
  Time: 15:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>用户信息</title>
    <!--cs-->
    <link rel="stylesheet" href="../css/UserInform.css">


    <!--js-->
    <script type="text/javascript" src="../js/jquery.js"></script>
    <script type="text/javascript " src="../js/UserInform.js"></script>

</head>
<body>
<div class="medial" id="tt">
    <div class="medial-box">
        <h1>用户信息</h1>
    </div>
    <form action="#" method="post" id="rr" onsubmit="return checkForm()">
        <div class="loginBoxText" >
            <div class="inputBox">
                <label>昵称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input class="input" type="text" id="name" name="name" placeholder="请输入昵称" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="inputBox">
                <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input class="input" type="text" id="email" name="email" placeholder="请输入邮箱"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="inputBox">
                <label>电话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input class="input" type="text" id="phone" name="phone" placeholder="请输入电话号码"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="inputBox" style="text-align: center;margin-bottom: 30px;">
                <label style="padding-bottom: 20px;">上传图片</label>
                <input  type="file" name="images" style="background-color: white;margin: auto;width: 243px;">
            </div>
            <div class="inputBox">
                <label>介绍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <textarea  class="input" type="text" name="userText" id="userText" placeholder="请输入介绍" ></textarea> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <font id="error" color="red" class="error"></font>
            </div>
            <div class="Button-box">
                <input class="Button" type="submit" value="保存" />
            </div>
            <div class="Button-box">
                <input class="Button" type="button" value="取消" onclick="back()" />
            </div>
        </div>
    </form>
</div>
</body>
</html>