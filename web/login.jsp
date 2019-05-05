<%--
  Created by IntelliJ IDEA.
  User: MSI
  Date: 2018/12/7
  Time: 13:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset="utf-8" />
  <!--css-->
  <link rel="stylesheet" href="css/log.css" />

  <!--js-->
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/log.js"></script>

  <title>智慧校园-基于GIS的视频监控系统-登陆</title>

</head>
  <body>
  <div class="loginBackground" id="tt">
    <div style="height: 100px;padding-top: 5%;">
      <div class="header main">
        <div class="headerText">
          <h1>校园3D系统</h1>
        </div>
      </div>
    </div>
    <div class="loginBoxMargin">
      <div class="boxHeader" style="text-align: center;">
        <div class="loginBoxHeader" id="login">
          <h2>用户登录</h2>
        </div>
      </div>
      <div id="loginBox" class="table">
        <form action="login.action" method="post" onsubmit="return checkForm()" id="form">
          <div class="loginBoxText ">
            <div class="inputBox">
              <p class="defaultS">请输入账号</p>
              <h3>账号</h3>
              <input class="input" type="text" name="username" id="Username" placeholder="请输入账号" />
            </div>
            <div class="inputBox">
              <p class="defaultS">请输入密码</p>
              <h3>密码</h3>
              <input class="input" type="password" name="password" id="password" placeholder="请输入密码" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<<<<<<< HEAD
              </font>
=======
              <font id="error" color="red" class="error"></font>
>>>>>>> 修改代码仓库数据,清理无用数据
            </div >
            <div class="inputBox" >
              <a href="register.jsp" style="text-decoration:none" role="button">注册</a>
            </div>
          </div>
          <input class="loginButton"   type="submit" value="登陆"  />
          <input class="loginButton"   type="reset" value="重置"  />
        </form>
      </div>
    </div>
  </div>
  </body>
</html>
