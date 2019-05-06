<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
 <%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/"; %>
<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<title>上传</title>
		
		<!--css-->
		<link rel="stylesheet" href="css/log.css" />
		<link rel="stylesheet" href="css/UserInform.css">
		
		<!--js-->
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/register.js"></script>
		<script type="text/javascript" src="js/UP.js"></script>
	</head>
	<body>
		<div class="loginBackground" id="tt">
				<div style="height: 120px;padding-top: 50px;">
				</div>	
				<div class="loginBoxMargin" id="rr">
						<div class="boxHeader" >
							<div class="loginBoxHeader" id="login">
								<h2>上传</h2>
							</div>
						</div>
					<div class="inputBox" style="text-align: center;margin-bottom: 30px;">
						<form action="upload.action" method="post" enctype="multipart/form-data" onsubmit="return checkForm()">
							<label style="padding-bottom: 20px;">上传图片</label>
							<input  type="file" name="File" style="background-color: white;margin: auto;width: 243px;">
							<input class="Button" type="submit" value="上传图片" />
						</form>
					</div>
			</div>
		</div>
	</body>
	
</html>
